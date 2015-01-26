package gw.api.iso
uses gw.plugin.iso.ISOBadReplyException

/**
 * Parses the initial synchronous reply or "receipt" returned by ISO in response to a search
 * or key field update request. Provides the ensureAccepted utility to verify that all the status
 * fields in the receipt are set correctly.
 */
@Export
class ISOReceiptBase  {

  var _xml : String
  
  /** The parsed receipt */
  var _receipt : xsd.iso.resp.ACORD as readonly Receipt
  var _dataPowerReceipt : xsd.iso.ak.ACORD as readonly DataPowerReceipt

  var _isDataPower : boolean
  
  /**
   * Create a new ISOReceipt from the given XML string
   */
  construct(xml : String) {
    _xml = xml
    _isDataPower = ISOProperties.instance().DataPower
    if(_isDataPower) {
      _dataPowerReceipt = xsd.iso.ak.ACORD.parse(xml)
    } else {
      _receipt = xsd.iso.resp.ACORD.parse(xml)
    }
  }
  

  /**
   * Verify that the receipt could be parsed correctly and that all the status codes indicate that
   * the message was accepted by ISO. Any failure results in an ISOBadReplyException being thrown
   */  
  @Throws(ISOBadReplyException, "If response does not contain valid status code.")
  public function ensureAccepted() {
    ensureParsed()
    checkXMLStatus()
    checkAuthenticationStatus()
    checkClaimStatus()
    checkClaimMessage()
  }
  
  /**
   * Called by ensureAccepted to verify that the receipt was parsed. Throws an ISOBadReplyException
   * with the bad XML string if parsing failed.
   */
  protected function ensureParsed() {
    if (Receipt == null && DataPowerReceipt == null) {
      throw new ISOBadReplyException(displaykey.Java.Error.ISO.BadXML + _xml)
    }
  }
  
  /**
   * Called by ensureAccepted to verify that the top level status code is correct. Throws an
   * ISOBadReplyException explaining the problem if the code is incorrect.
   */
  protected function checkXMLStatus() {
    ensureStatusValid("Status", XMLStatusCode, ISOConstants.RECEIPT_STATUS_CODE_OK,
                  XMLStatusDesc)
  }
  
  /**
   * Called by ensureAccepted to verify that the SignonRs status code is correct. Throws an
   * ISOBadReplyException explaining the problem if the code is incorrect.
   */
  protected function checkAuthenticationStatus() {
    ensureStatusValid("SignonRs.Status", AuthStatusCode, ISOConstants.RECEIPT_STATUS_CODE_OK,
                  AuthStatusDesc)
  }
  
  /**
   * Called by ensureAccepted to verify that the ClaimsSvcRs status code is correct. Throws an
   * ISOBadReplyException explaining the problem if the code is incorrect.
   */
  protected function checkClaimStatus() {
    ensureStatusValid("ClaimsSvcRs.Status", ClaimStatusCode, ISOConstants.RECEIPT_STATUS_CODE_OK,
                  ClaimStatusDesc)
  }
  
  /**
   * Called by ensureAccepted to verify that the ClaimInvestigationAddRs message status code is
   * correct. Throws an ISOBadReplyException explaining the problem if the code is incorrect.
   */
  protected function checkClaimMessage() {
    ensureStatusValid("ClaimInvestigationAddRs.MsgStatus", 
                      ClaimMessageCode,
                      ISOConstants.RECEIPT_STATUS_RESPONSE_PENDING,
                      ClaimMessageDesc)
  }
  
  /**
   * Utility method used by all the checks which verify that a status code has a particular expected
   * value. The parameters are the path to the status code, the code's value, the expected value and
   * the description of the problem given in the status description field.
   */
  @Throws(ISOBadReplyException, "If the status code is not as expected")
  protected function ensureStatusValid(path : String, code : String, expectedCode : String, description : String) {
    if (!code.equalsIgnoreCase(expectedCode)) {
      throw new ISOBadReplyException(displaykey.Java.Error.ISO.IncorrectStatus(path, code, expectedCode, description))      
    }
  }

  private property get AuthStatusCode() : String {
    if(_isDataPower) {
      return DataPowerReceipt.SignonRs.Status.StatusCd as String
    } else {
      return Receipt.ACORDRSP.SignonRs.Status.StatusCd.Text
    }
  }

  private property get AuthStatusDesc() : String {
    if(_isDataPower) {
      return DataPowerReceipt.SignonRs.Status.StatusDesc.StatusDescShort
    } else {
      return Receipt.ACORDRSP.SignonRs.Status.StatusDesc.Text
    }
  }

  private property get XMLStatusCode() : String {
    if(_isDataPower) {
      return DataPowerReceipt.Status.StatusCd as String
    } else {
      return Receipt.ACORDRSP.Status.StatusCd.Text
    }
  }

  private property get XMLStatusDesc() : String {
    if(_isDataPower) {
      return DataPowerReceipt.Status.StatusDesc.StatusDescShort
    } else {
      return Receipt.ACORDRSP.Status.StatusDesc.Text
    }
  }

  private property get ClaimStatusCode() : String {
    if(_isDataPower) {
      return DataPowerReceipt.ClaimsSvcRss[0].Status.StatusCd
    } else {
      return Receipt.ACORDRSP.ClaimsSvcRss[0].Status.StatusCd.Text
    }
  }

  private property get ClaimStatusDesc() : String {
    if(_isDataPower) {
      return DataPowerReceipt.ClaimsSvcRss[0].Status.StatusDesc
    } else {
      return Receipt.ACORDRSP.ClaimsSvcRss[0].Status.StatusDesc.Text
    }
  }

  private property get ClaimMessageCode() : String {
    if(_isDataPower) {
      return DataPowerReceipt.ClaimsSvcRss[0].ClaimInvestigationAddRs.MsgStatus.MsgStatusCd
    } else {
      return Receipt.ACORDRSP.ClaimsSvcRss[0].CLAIMSSVCRSMSGSs[0].Choice.ClaimInvestigationAddRs.MsgStatus.MsgStatusCd
    }
  }

  private property get ClaimMessageDesc() : String {
    if(_isDataPower) {
      return DataPowerReceipt.ClaimsSvcRss[0].ClaimInvestigationAddRs.MsgStatus.MsgStatusDesc
    } else {
      return Receipt.ACORDRSP.ClaimsSvcRss[0].CLAIMSSVCRSMSGSs[0].Choice.ClaimInvestigationAddRs.MsgStatus.MsgStatusDesc
    }
  }

}


