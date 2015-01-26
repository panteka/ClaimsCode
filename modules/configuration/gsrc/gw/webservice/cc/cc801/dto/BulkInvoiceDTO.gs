package gw.webservice.cc.cc801.dto

uses gw.api.database.Query
uses gw.api.util.StringUtil
uses gw.api.webservice.exception.BadIdentifierException
uses gw.pl.persistence.core.Bundle
uses gw.xml.ws.annotation.WsiExportable
uses java.util.Date
uses javax.annotation.Generated

/**
 * <p style="border: 1px solid black; padding: 10px">This Data Transfer Object ("DTO") class is used to generate a WSDL to serialize and deserialize information across the network. Any change to the public properties of this DTO class will change the WSDL, thus breaking any existing clients. So once the corresponding WSDL is in use this DTO should only be changed with extreme caution, as it will require existing clients to be rebuilt and redeployed.<br/><br/>
DTOs which are a simple mapping from the domain model may be auto-generated using the "WSI DTO Generator", available from the customer portal. This generator can significantly speed up initial coding of such DTOs. Always remember, however, that DTOs are a network interface and a simple mapping from the domain model may not provide the best results. Remember too that once a DTO has been used in a deployed WSDL, re-running the generator may break existing clients (see above). Please read the documentation in the accelerator for guidance.</p><br/>
 * A(n) {@link BulkInvoiceDTO} is a DTO that represents an instance of {@link entity.BulkInvoice} for use by certain WS-I Web Services in the base product. This file is composed of basic getters and setters, plus members that make it easier for server-side code to work with DTOs, like virtual getters that query for entities by PublicID, and methods to copy fields to or from an instance of {@link entity.BulkInvoice}.
 * <p>None of these methods constrain how an instance of BulkInvoiceDTO is created, initialized or used (beyond the normal Gosu type checking): this is consistent with the <a href="http://en.wikipedia.org/wiki/Data_transfer_object">DTO Design Pattern</a>, which states that "DTOs are simple objects that should not contain any business logic that would require testing". Validation logic that considers whether a DTO field can have a <i>particular</i> value (based on things like effective dates, jurisdictions, line of business, user permissions, the values of other fields, etc.) should not be handled here, but rather by the API that manipulates the BulkInvoiceDTO.
 * <p>Please read the documentation in the accelerator before reusing this class in any additional WS-I Web Services.</p>
 * <p>Fields are mapped according to the following rules:
 * <ul><li>Primitive values are copied directly</li><li>Typekey fields are copied directly (the WS-I layer translates them to/from WS-I enums)</li><li>Foreign keys fields are represented by the target object's PublicID</li><li>Arraykey fields are represented by an array of the PublicIDs of the elements in the array</li></ul></p>
 * <p>The specific mappings for {@link BulkInvoiceDTO} are as follows:
 * <table border="1"><tr><th>Field</th><th>Maps to</th></tr><tr><td>AccountName</td><td>BulkInvoice.AccountName</td></tr><tr><td>ApprovalDate</td><td>BulkInvoice.ApprovalDate</td></tr><tr><td>ApprovalStatus</td><td>BulkInvoice.ApprovalStatus</td></tr><tr><td>ApprovedReportingAmount</td><td>BulkInvoice.ApprovedReportingAmount</td></tr><tr><td>ApprovedTransactionAmount</td><td>BulkInvoice.ApprovedTransactionAmount</td></tr><tr><td>BankAccountNumber</td><td>BulkInvoice.BankAccountNumber</td></tr><tr><td>BankAccountType</td><td>BulkInvoice.BankAccountType</td></tr><tr><td>BankName</td><td>BulkInvoice.BankName</td></tr><tr><td>BankRoutingNumber</td><td>BulkInvoice.BankRoutingNumber</td></tr><tr><td>BulkInvoiceTotal</td><td>BulkInvoice.BulkInvoiceTotal</td></tr><tr><td>CheckInstructions</td><td>BulkInvoice.CheckInstructions</td></tr><tr><td>CheckNumber</td><td>BulkInvoice.CheckNumber</td></tr><tr><td>Comments</td><td>BulkInvoice.Comments</td></tr><tr><td>CreateTime</td><td>BulkInvoice.CreateTime</td></tr><tr><td>CreateUserID</td><td>BulkInvoice.CreateUser.PublicID</td></tr><tr><td>Currency</td><td>BulkInvoice.Currency</td></tr><tr><td>DefaultCostCategory</td><td>BulkInvoice.DefaultCostCategory</td></tr><tr><td>DefaultCostType</td><td>BulkInvoice.DefaultCostType</td></tr><tr><td>DefaultPaymentType</td><td>BulkInvoice.DefaultPaymentType</td></tr><tr><td>Deletable</td><td>BulkInvoice.Deletable</td></tr><tr><td>DeliveryMethod</td><td>BulkInvoice.DeliveryMethod</td></tr><tr><td>Editable</td><td>BulkInvoice.Editable</td></tr><tr><td>InvoiceItemIDs</td><td>BulkInvoice.InvoiceItems*.PublicID</td></tr><tr><td>InvoiceNumber</td><td>BulkInvoice.InvoiceNumber</td></tr><tr><td>IsPrimary</td><td>BulkInvoice.IsPrimary</td></tr><tr><td>IssueDate</td><td>BulkInvoice.IssueDate</td></tr><tr><td>LastValidatedDate</td><td>BulkInvoice.LastValidatedDate</td></tr><tr><td>MailTo</td><td>BulkInvoice.MailTo</td></tr><tr><td>MailToAddress</td><td>BulkInvoice.MailToAddress</td></tr><tr><td>Memo</td><td>BulkInvoice.Memo</td></tr><tr><td>PayeeChangeable</td><td>BulkInvoice.PayeeChangeable</td></tr><tr><td>PayeeID</td><td>BulkInvoice.Payee.PublicID</td></tr><tr><td>PaymentMethod</td><td>BulkInvoice.PaymentMethod</td></tr><tr><td>PayTo</td><td>BulkInvoice.PayTo</td></tr><tr><td>PendingItemValidation</td><td>BulkInvoice.PendingItemValidation</td></tr><tr><td>PublicID</td><td>BulkInvoice.PublicID</td></tr><tr><td>ReceivedDate</td><td>BulkInvoice.ReceivedDate</td></tr><tr><td>Reportability</td><td>BulkInvoice.Reportability</td></tr><tr><td>RequestingUserID</td><td>BulkInvoice.RequestingUser.PublicID</td></tr><tr><td>ScheduledSendDate</td><td>BulkInvoice.ScheduledSendDate</td></tr><tr><td>SplitEqually</td><td>BulkInvoice.SplitEqually</td></tr><tr><td>Status</td><td>BulkInvoice.Status</td></tr><tr><td>Stoppable</td><td>BulkInvoice.Stoppable</td></tr><tr><td>Submittable</td><td>BulkInvoice.Submittable</td></tr><tr><td>TotalReportingAmount</td><td>BulkInvoice.TotalReportingAmount</td></tr><tr><td>TotalTransactionAmount</td><td>BulkInvoice.TotalTransactionAmount</td></tr><tr><td>UpdateTime</td><td>BulkInvoice.UpdateTime</td></tr><tr><td>UpdateUserID</td><td>BulkInvoice.UpdateUser.PublicID</td></tr><tr><td>Valid</td><td>BulkInvoice.Valid</td></tr><tr><td>Validateable</td><td>BulkInvoice.Validateable</td></tr><tr><td>Voidable</td><td>BulkInvoice.Voidable</td></tr></table></p>
 * <br/>This file was generated using the following property definitions:<br/><pre>BulkInvoice#AccountName,               // String<br/>BulkInvoice#ApprovalDate,              // java.util.Date<br/>BulkInvoice#ApprovalStatus,            // typekey.ApprovalStatus<br/>BulkInvoice#ApprovedReportingAmount,   // gw.api.financials.CurrencyAmount<br/>BulkInvoice#ApprovedTransactionAmount, // gw.api.financials.CurrencyAmount<br/>BulkInvoice#BankAccountNumber,         // String<br/>BulkInvoice#BankAccountType,           // typekey.BankAccountType<br/>BulkInvoice#BankName,                  // String<br/>BulkInvoice#BankRoutingNumber,         // String<br/>BulkInvoice#BulkInvoiceTotal,          // gw.api.financials.CurrencyAmount<br/>BulkInvoice#CheckInstructions,         // typekey.CheckHandlingInstructions<br/>BulkInvoice#CheckNumber,               // String<br/>BulkInvoice#Comments,                  // String<br/>BulkInvoice#Currency,                  // typekey.Currency<br/>BulkInvoice#DefaultCostCategory,       // typekey.CostCategory<br/>BulkInvoice#DefaultCostType,           // typekey.CostType<br/>BulkInvoice#DefaultPaymentType,        // typekey.PaymentType<br/>BulkInvoice#Deletable,                 // boolean<br/>BulkInvoice#DeliveryMethod,            // typekey.DeliveryMethod<br/>BulkInvoice#Editable,                  // boolean<br/>BulkInvoice#InvoiceItems,              // BulkInvoiceItem[]<br/>BulkInvoice#InvoiceNumber,             // String<br/>BulkInvoice#IsPrimary,                 // Boolean<br/>BulkInvoice#IssueDate,                 // java.util.Date<br/>BulkInvoice#LastValidatedDate,         // java.util.Date<br/>BulkInvoice#MailTo,                    // String<br/>BulkInvoice#MailToAddress,             // String<br/>BulkInvoice#Memo,                      // String<br/>BulkInvoice#Payee,                     // Contact<br/>BulkInvoice#PayeeChangeable,           // boolean<br/>BulkInvoice#PaymentMethod,             // typekey.PaymentMethod<br/>BulkInvoice#PayTo,                     // String<br/>BulkInvoice#PendingItemValidation,     // boolean<br/>BulkInvoice#ReceivedDate,              // java.util.Date<br/>BulkInvoice#Reportability,             // typekey.ReportabilityType<br/>BulkInvoice#RequestingUser,            // User<br/>BulkInvoice#ScheduledSendDate,         // java.util.Date<br/>BulkInvoice#SplitEqually,              // Boolean<br/>BulkInvoice#Status,                    // typekey.BulkInvoiceStatus<br/>BulkInvoice#Stoppable,                 // boolean<br/>BulkInvoice#Submittable,               // boolean<br/>BulkInvoice#TotalReportingAmount,      // gw.api.financials.CurrencyAmount<br/>BulkInvoice#TotalTransactionAmount,    // gw.api.financials.CurrencyAmount<br/>BulkInvoice#Valid,                     // Boolean<br/>BulkInvoice#Validateable,              // boolean<br/>BulkInvoice#Voidable                   // boolean</pre>
 */
@Export
@WsiExportable("http://guidewire.com/cc/ws/gw/webservice/cc/cc801/dto/BulkInvoiceDTO")
@Generated("DTOBuilder", "DO NOT edit this class directly! See comments at the top of the file.", "2014-03-30T17:16Z")
final class BulkInvoiceDTO {
  var _accountName                   : String                           as AccountName
  var _approvalDate                  : Date                             as ApprovalDate
  var _approvalStatus                : ApprovalStatus                   as ApprovalStatus
  var _approvedReportingAmount       : gw.api.financials.CurrencyAmount as ApprovedReportingAmount
  var _approvedTransactionAmount     : gw.api.financials.CurrencyAmount as ApprovedTransactionAmount
  var _bankAccountNumber             : String                           as BankAccountNumber
  var _bankAccountType               : BankAccountType                  as BankAccountType
  var _bankName                      : String                           as BankName
  var _bankRoutingNumber             : String                           as BankRoutingNumber
  var _bulkInvoiceTotal              : gw.api.financials.CurrencyAmount as BulkInvoiceTotal
  var _checkInstructions             : CheckHandlingInstructions        as CheckInstructions
  var _checkNumber                   : String                           as CheckNumber
  var _comments                      : String                           as Comments
  var _createTime                    : Date                             as CreateTime
  /** Derived from Editable#CreateUser.PublicID */
  var _createUserID                  : String                           as CreateUserID
  var _currency                      : Currency                         as Currency
  var _customExchangeRate            : java.math.BigDecimal             as CustomExchangeRate
  var _customExchangeRateDescription : String                           as CustomExchangeRateDescription
  var _defaultCostCategory           : CostCategory                     as DefaultCostCategory
  var _defaultCostType               : CostType                         as DefaultCostType
  var _defaultPaymentType            : PaymentType                      as DefaultPaymentType
  var _deletable                     : boolean                          as Deletable
  var _deliveryMethod                : DeliveryMethod                   as DeliveryMethod
  var _editable                      : boolean                          as Editable
  /** Derived from BulkInvoice#InvoiceItems*.PublicID */
  var _invoiceItemIDs                : String[]                         as InvoiceItemIDs = {}
  var _invoiceNumber                 : String                           as InvoiceNumber
  var _isPrimary                     : Boolean                          as IsPrimary
  var _issueDate                     : Date                             as IssueDate
  var _lastValidatedDate             : Date                             as LastValidatedDate
  var _mailTo                        : String                           as MailTo
  var _mailToAddress                 : String                           as MailToAddress
  var _memo                          : String                           as Memo
  var _newInvoiceItems               : BulkInvoiceItemDTO[]             as NewInvoiceItems = {}
  var _payeeChangeable               : boolean                          as PayeeChangeable
  /** Derived from BulkInvoice#Payee.PublicID */
  var _payeeID                       : String                           as PayeeID
  var _paymentMethod                 : PaymentMethod                    as PaymentMethod
  var _payTo                         : String                           as PayTo
  var _pendingItemValidation         : boolean                          as PendingItemValidation
  var _publicID                      : String                           as PublicID
  var _receivedDate                  : Date                             as ReceivedDate
  var _reportability                 : ReportabilityType                as Reportability
  /** Derived from BulkInvoice#RequestingUser.PublicID */
  var _requestingUserID              : String                           as RequestingUserID
  var _scheduledSendDate             : Date                             as ScheduledSendDate
  var _splitEqually                  : Boolean                          as SplitEqually
  var _status                        : BulkInvoiceStatus                as Status
  var _stoppable                     : boolean                          as Stoppable
  var _submittable                   : boolean                          as Submittable
  var _totalReportingAmount          : gw.api.financials.CurrencyAmount as TotalReportingAmount
  var _totalTransactionAmount        : gw.api.financials.CurrencyAmount as TotalTransactionAmount
  var _updateTime                    : Date                             as UpdateTime
  /** Derived from Editable#UpdateUser.PublicID */
  var _updateUserID                  : String                           as UpdateUserID
  var _valid                         : Boolean                          as Valid
  var _validateable                  : boolean                          as Validateable
  var _validationAlerts              : BIValidationAlertDTO[]           as ValidationAlerts = {}
  var _voidable                      : boolean                          as Voidable

  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  construct() { }

  /**
   * Copies the platform-managed fields from the supplied BulkInvoice
   * @param that The BulkInvoice to copy from.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  protected function _copyReadOnlyFieldsFrom(that : BulkInvoice) {
    // if field is on base class
      _approvedReportingAmount       = that.ApprovedReportingAmount
      _approvedTransactionAmount     = that.ApprovedTransactionAmount
      _createTime                    = that.CreateTime
      _createUserID                  = that.CreateUser.PublicID
      _deletable                     = that.Deletable
      _editable                      = that.Editable
      _invoiceItemIDs                = that.InvoiceItems*.PublicID
      _lastValidatedDate             = that.LastValidatedDate
      _payeeChangeable               = that.PayeeChangeable
      _pendingItemValidation         = that.PendingItemValidation
      _stoppable                     = that.Stoppable
      _submittable                   = that.Submittable
      _totalReportingAmount          = that.TotalReportingAmount
      _totalTransactionAmount        = that.TotalTransactionAmount
      _updateTime                    = that.UpdateTime
      _updateUserID                  = that.UpdateUser.PublicID
      _valid                         = that.Valid
      _validateable                  = that.Validateable
      _voidable                      = that.Voidable
    //
  }

  /**
   * Set the fields in this DTO using the supplied BulkInvoice
   * @param that The BulkInvoice to copy from.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  final function readFrom(that : BulkInvoice) : BulkInvoiceDTO {
    _copyReadOnlyFieldsFrom(that)

    // if field is on base class
      AccountName                    = that.AccountName
      ApprovalDate                   = that.ApprovalDate
      ApprovalStatus                 = that.ApprovalStatus
      BankAccountNumber              = that.BankAccountNumber
      BankAccountType                = that.BankAccountType
      BankName                       = that.BankName
      BankRoutingNumber              = that.BankRoutingNumber
      BulkInvoiceTotal               = that.BulkInvoiceTotal
      CheckInstructions              = that.CheckInstructions
      CheckNumber                    = that.CheckNumber
      Comments                       = that.Comments
      Currency                       = that.Currency
      DefaultCostCategory            = that.DefaultCostCategory
      DefaultCostType                = that.DefaultCostType
      DefaultPaymentType             = that.DefaultPaymentType
      DeliveryMethod                 = that.DeliveryMethod
      InvoiceNumber                  = that.InvoiceNumber
      IsPrimary                      = that.IsPrimary
      IssueDate                      = that.IssueDate
      MailTo                         = that.MailTo
      MailToAddress                  = that.MailToAddress
      Memo                           = that.Memo
      PayTo                          = that.PayTo
      PayeeID                        = that.Payee.PublicID
      PaymentMethod                  = that.PaymentMethod
      PublicID                       = that.PublicID
      ReceivedDate                   = that.ReceivedDate
      Reportability                  = that.Reportability
      RequestingUserID               = that.RequestingUser.PublicID
      ScheduledSendDate              = that.ScheduledSendDate
      SplitEqually                   = that.SplitEqually
      Status                         = that.Status
    //
    return this
  }

  /**
   * Update the supplied BulkInvoice using the field values stored in this DTO
   * @param that The BulkInvoice to update.
   * @param (Optional) ignoreNullValues If {@code true}, only those fields that are non-null are used (i.e. the null-valued fields are treated as if they were unspecified). If {@code false}, every DTO field will be used to update the BulkInvoice, even those that are null. Usually you will want this to be {@code true}.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  final function writeTo(that : BulkInvoice, ignoreNullValues = true) : BulkInvoice {
    _copyReadOnlyFieldsFrom(that)

    // if field is on base class
      if (AccountName                   != null or !ignoreNullValues) that.AccountName                   = AccountName
      if (ApprovalDate                  != null or !ignoreNullValues) that.ApprovalDate                  = ApprovalDate
      if (ApprovalStatus                != null or !ignoreNullValues) that.ApprovalStatus                = ApprovalStatus
      if (BankAccountNumber             != null or !ignoreNullValues) that.BankAccountNumber             = BankAccountNumber
      if (BankAccountType               != null or !ignoreNullValues) that.BankAccountType               = BankAccountType
      if (BankName                      != null or !ignoreNullValues) that.BankName                      = BankName
      if (BankRoutingNumber             != null or !ignoreNullValues) that.BankRoutingNumber             = BankRoutingNumber
      if (BulkInvoiceTotal              != null or !ignoreNullValues) that.BulkInvoiceTotal              = BulkInvoiceTotal
      if (CheckInstructions             != null or !ignoreNullValues) that.CheckInstructions             = CheckInstructions
      if (CheckNumber                   != null or !ignoreNullValues) that.CheckNumber                   = CheckNumber
      if (Comments                      != null or !ignoreNullValues) that.Comments                      = Comments
      if (Currency                      != null or !ignoreNullValues) that.Currency                      = Currency
      if (DefaultCostCategory           != null or !ignoreNullValues) that.DefaultCostCategory           = DefaultCostCategory
      if (DefaultCostType               != null or !ignoreNullValues) that.DefaultCostType               = DefaultCostType
      if (DefaultPaymentType            != null or !ignoreNullValues) that.DefaultPaymentType            = DefaultPaymentType
      if (DeliveryMethod                != null or !ignoreNullValues) that.DeliveryMethod                = DeliveryMethod
      if (InvoiceNumber                 != null or !ignoreNullValues) that.InvoiceNumber                 = InvoiceNumber
      if (IsPrimary                     != null or !ignoreNullValues) that.IsPrimary                     = IsPrimary
      if (IssueDate                     != null or !ignoreNullValues) that.IssueDate                     = IssueDate
      if (MailTo                        != null or !ignoreNullValues) that.MailTo                        = MailTo
      if (MailToAddress                 != null or !ignoreNullValues) that.MailToAddress                 = MailToAddress
      if (Memo                          != null or !ignoreNullValues) that.Memo                          = Memo
      if (PayTo                         != null or !ignoreNullValues) that.PayTo                         = PayTo
      if (PayeeID                       != null or !ignoreNullValues) that.Payee                         = Payee
      if (PaymentMethod                 != null or !ignoreNullValues) that.PaymentMethod                 = PaymentMethod
      if (PublicID                      != null or !ignoreNullValues) that.PublicID                      = PublicID
      if (ReceivedDate                  != null or !ignoreNullValues) that.ReceivedDate                  = ReceivedDate
      if (Reportability                 != null or !ignoreNullValues) that.Reportability                 = Reportability
      if (RequestingUserID              != null or !ignoreNullValues) that.RequestingUser                = RequestingUser
      if (ScheduledSendDate             != null or !ignoreNullValues) that.ScheduledSendDate             = ScheduledSendDate
      if (SplitEqually                  != null or !ignoreNullValues) that.SplitEqually                  = SplitEqually
      if (Status                        != null or !ignoreNullValues) that.Status                        = Status
    //
    return that
  }

  /**
   * Uses the createNew block to create a new BulkInvoice, adds it to the supplied bundle, then updates it using the field values stored in this DTO. The ignoreNullValues parameter controls how the fields that are null are treated.
   * @param bundle The bundle in which to create the new BulkInvoice.
   * @param createNew (Optional) A block that returns a new instance of BulkInvoice. If this is null, the default constructor will be used.
   * @param ignoreNullValues (Optional) If {@code true}, only those fields that are non-null are used (i.e. the null-valued fields are treated as if they were unspecified). If {@code false}, every DTO field will be used to update the BulkInvoice, even those that are null. Usually you will want this to be {@code true}.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  final function writeToNewEntityIn(bundle : Bundle, createNew : block() : BulkInvoice = null, ignoreNullValues = true) : BulkInvoice {
    var instance : BulkInvoice
    if (createNew == null) {
      instance = bundle == null
          ? new BulkInvoice()
          : new BulkInvoice(bundle)
    }
    else {
      instance = createNew()

      if (bundle != null) {
        instance = bundle.add(instance)
      }
    }
    return writeTo(instance, ignoreNullValues)
  }

  /** Convenience property that returns the {@link User} whose PublicID is {@code CreateUserID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  property get CreateUser()                 : User                            { return fetchByID(CreateUserID) }
  
  /** Convenience property that returns a {@link BulkInvoiceItem[]} of the objects whose PublicIDs are in {@code InvoiceItemIDs}. This property is only available on the server--it is not exposed through the WS-I layer. */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  property get InvoiceItems()               : BulkInvoiceItem[]               { return fetchByID(InvoiceItemIDs) }
  
  /** Convenience property that returns the {@link Contact} whose PublicID is {@code PayeeID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  property get Payee()                      : Contact                         { return fetchByID(PayeeID) }
  
  /** Convenience property that returns the {@link User} whose PublicID is {@code RequestingUserID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  property get RequestingUser()             : User                            { return fetchByID(RequestingUserID) }
  
  /** Convenience property that returns the {@link User} whose PublicID is {@code UpdateUserID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  property get UpdateUser()                 : User                            { return fetchByID(UpdateUserID) }

  /**
   * Returns whether the fields tracked by this DTO match the same fields in the other DTO
   * @param that The BulkInvoiceDTO to compare against.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  override final function equals(that : Object) : boolean {
    if (that typeis BulkInvoiceDTO) {
      return AccountName                   == that.AccountName
         and ApprovalDate                  == that.ApprovalDate
         and ApprovalStatus                == that.ApprovalStatus
         and BankAccountNumber             == that.BankAccountNumber
         and BankAccountType               == that.BankAccountType
         and BankName                      == that.BankName
         and BankRoutingNumber             == that.BankRoutingNumber
         and BulkInvoiceTotal              == that.BulkInvoiceTotal
         and CheckInstructions             == that.CheckInstructions
         and CheckNumber                   == that.CheckNumber
         and Comments                      == that.Comments
         and Currency                      == that.Currency
         and CustomExchangeRate            == that.CustomExchangeRate
         and CustomExchangeRateDescription == that.CustomExchangeRateDescription
         and DefaultCostCategory           == that.DefaultCostCategory
         and DefaultCostType               == that.DefaultCostType
         and DefaultPaymentType            == that.DefaultPaymentType
         and DeliveryMethod                == that.DeliveryMethod
         and InvoiceNumber                 == that.InvoiceNumber
         and IsPrimary                     == that.IsPrimary
         and IssueDate                     == that.IssueDate
         and MailTo                        == that.MailTo
         and MailToAddress                 == that.MailToAddress
         and Memo                          == that.Memo
         and PayeeID                       == that.PayeeID
         and PaymentMethod                 == that.PaymentMethod
         and PayTo                         == that.PayTo
         and PublicID                      == that.PublicID
         and ReceivedDate                  == that.ReceivedDate
         and Reportability                 == that.Reportability
         and RequestingUserID              == that.RequestingUserID
         and ScheduledSendDate             == that.ScheduledSendDate
         and SplitEqually                  == that.SplitEqually
         and Status                        == that.Status
    }
    return super.equals(that)
  }

  /**
   * Returns the hash code of this object.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  override final function hashCode() : int {
    return {
      AccountName,
      ApprovalDate,
      ApprovalStatus,
      BankAccountNumber,
      BankAccountType,
      BankName,
      BankRoutingNumber,
      BulkInvoiceTotal,
      CheckInstructions,
      CheckNumber,
      Comments,
      Currency,
      CustomExchangeRate,
      CustomExchangeRateDescription,
      DefaultCostCategory,
      DefaultCostType,
      DefaultPaymentType,
      DeliveryMethod,
      InvoiceNumber,
      IsPrimary,
      IssueDate,
      MailTo,
      MailToAddress,
      Memo,
      PayeeID,
      PaymentMethod,
      PayTo,
      PublicID,
      ReceivedDate,
      Reportability,
      RequestingUserID,
      ScheduledSendDate,
      SplitEqually,
      Status
    }.reduce(17, \ hashCode, obj -> 31 * hashCode + obj?.hashCode())
  }

  /**
   * Provides a rough idea of the command needed to re-create this DTO. Because it is rough it is probably only  useful for debugging purposes.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  override final function toString() : String {
    var fields = {} as List<String>

    if (AccountName                  .HasContent) fields.add(':AccountName                   = ' + StringUtil.enquote(AccountName))
    if (ApprovalDate                   != null  ) fields.add(':ApprovalDate                  = ' + StringUtil.enquote(ApprovalDate.toString()) + ' as Date')
    if (ApprovalStatus                 != null  ) fields.add(':ApprovalStatus                = ApprovalStatus.get("' + ApprovalStatus.Code + '")')
    if (ApprovedReportingAmount        != null  ) fields.add(':ApprovedReportingAmount       = ' + ApprovedReportingAmount)
    if (ApprovedTransactionAmount      != null  ) fields.add(':ApprovedTransactionAmount     = ' + ApprovedTransactionAmount)
    if (BankAccountNumber            .HasContent) fields.add(':BankAccountNumber             = ' + StringUtil.enquote(BankAccountNumber))
    if (BankAccountType                != null  ) fields.add(':BankAccountType               = BankAccountType.get("' + BankAccountType.Code + '")')
    if (BankName                     .HasContent) fields.add(':BankName                      = ' + StringUtil.enquote(BankName))
    if (BankRoutingNumber            .HasContent) fields.add(':BankRoutingNumber             = ' + StringUtil.enquote(BankRoutingNumber))
    if (BulkInvoiceTotal               != null  ) fields.add(':BulkInvoiceTotal              = ' + BulkInvoiceTotal)
    if (CheckInstructions              != null  ) fields.add(':CheckInstructions             = CheckHandlingInstructions.get("' + CheckInstructions.Code + '")')
    if (CheckNumber                  .HasContent) fields.add(':CheckNumber                   = ' + StringUtil.enquote(CheckNumber))
    if (Comments                     .HasContent) fields.add(':Comments                      = ' + StringUtil.enquote(Comments))
    if (CreateTime                     != null  ) fields.add(':CreateTime                    = ' + StringUtil.enquote(CreateTime.toString()) + ' as Date')
    if (CreateUserID                 .HasContent) fields.add(':CreateUserID                  = ' + StringUtil.enquote(CreateUserID))
    if (Currency                       != null  ) fields.add(':Currency                      = Currency.get("' + Currency.Code + '")')
    if (CustomExchangeRate             != null  ) fields.add(':CustomExchangeRate            = ' + CustomExchangeRate)
    if (CustomExchangeRateDescription.HasContent) fields.add(':CustomExchangeRateDescription = ' + StringUtil.enquote(CustomExchangeRateDescription))
    if (DefaultCostCategory            != null  ) fields.add(':DefaultCostCategory           = CostCategory.get("' + DefaultCostCategory.Code + '")')
    if (DefaultCostType                != null  ) fields.add(':DefaultCostType               = CostType.get("' + DefaultCostType.Code + '")')
    if (DefaultPaymentType             != null  ) fields.add(':DefaultPaymentType            = PaymentType.get("' + DefaultPaymentType.Code + '")')
    if (Deletable                      == true  ) fields.add(':Deletable                     = true')
    if (DeliveryMethod                 != null  ) fields.add(':DeliveryMethod                = DeliveryMethod.get("' + DeliveryMethod.Code + '")')
    if (Editable                       == true  ) fields.add(':Editable                      = true')
    if (InvoiceItemIDs                 != null  ) fields.add(':InvoiceItemIDs                = ' + InvoiceItemIDs)
    if (InvoiceNumber                .HasContent) fields.add(':InvoiceNumber                 = ' + StringUtil.enquote(InvoiceNumber))
    if (IsPrimary                      != null  ) fields.add(':IsPrimary                     = ' + IsPrimary)
    if (IssueDate                      != null  ) fields.add(':IssueDate                     = ' + StringUtil.enquote(IssueDate.toString()) + ' as Date')
    if (LastValidatedDate              != null  ) fields.add(':LastValidatedDate             = ' + StringUtil.enquote(LastValidatedDate.toString()) + ' as Date')
    if (MailTo                       .HasContent) fields.add(':MailTo                        = ' + StringUtil.enquote(MailTo))
    if (MailToAddress                .HasContent) fields.add(':MailToAddress                 = ' + StringUtil.enquote(MailToAddress))
    if (Memo                         .HasContent) fields.add(':Memo                          = ' + StringUtil.enquote(Memo))
    if (NewInvoiceItems                != null  ) fields.add(':NewInvoiceItems               = ' + NewInvoiceItems)
    if (PayeeChangeable                == true  ) fields.add(':PayeeChangeable               = true')
    if (PayeeID                      .HasContent) fields.add(':PayeeID                       = ' + StringUtil.enquote(PayeeID))
    if (PaymentMethod                  != null  ) fields.add(':PaymentMethod                 = PaymentMethod.get("' + PaymentMethod.Code + '")')
    if (PayTo                        .HasContent) fields.add(':PayTo                         = ' + StringUtil.enquote(PayTo))
    if (PendingItemValidation          == true  ) fields.add(':PendingItemValidation         = true')
    if (PublicID                     .HasContent) fields.add(':PublicID                      = ' + StringUtil.enquote(PublicID))
    if (ReceivedDate                   != null  ) fields.add(':ReceivedDate                  = ' + StringUtil.enquote(ReceivedDate.toString()) + ' as Date')
    if (Reportability                  != null  ) fields.add(':Reportability                 = ReportabilityType.get("' + Reportability.Code + '")')
    if (RequestingUserID             .HasContent) fields.add(':RequestingUserID              = ' + StringUtil.enquote(RequestingUserID))
    if (ScheduledSendDate              != null  ) fields.add(':ScheduledSendDate             = ' + StringUtil.enquote(ScheduledSendDate.toString()) + ' as Date')
    if (SplitEqually                   != null  ) fields.add(':SplitEqually                  = ' + SplitEqually)
    if (Status                         != null  ) fields.add(':Status                        = BulkInvoiceStatus.get("' + Status.Code + '")')
    if (Stoppable                      == true  ) fields.add(':Stoppable                     = true')
    if (Submittable                    == true  ) fields.add(':Submittable                   = true')
    if (TotalReportingAmount           != null  ) fields.add(':TotalReportingAmount          = ' + TotalReportingAmount)
    if (TotalTransactionAmount         != null  ) fields.add(':TotalTransactionAmount        = ' + TotalTransactionAmount)
    if (UpdateTime                     != null  ) fields.add(':UpdateTime                    = ' + StringUtil.enquote(UpdateTime.toString()) + ' as Date')
    if (UpdateUserID                 .HasContent) fields.add(':UpdateUserID                  = ' + StringUtil.enquote(UpdateUserID))
    if (Valid                          != null  ) fields.add(':Valid                         = ' + Valid)
    if (Validateable                   == true  ) fields.add(':Validateable                  = true')
    if (ValidationAlerts               != null  ) fields.add(':ValidationAlerts              = ' + ValidationAlerts)
    if (Voidable                       == true  ) fields.add(':Voidable                      = true')

    return "new BulkInvoiceDTO() {\n  " + fields.join(",\n  ") + "\n}"
  }

  /**
   * return a new BulkInvoiceDTO that represents the current state of the supplied BulkInvoice.
   * @param that The BulkInvoice to be represented.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  static function valueOf(that : BulkInvoice) : BulkInvoiceDTO {
    return new BulkInvoiceDTO().readFrom(that)
  }

  /**
   * Returns all of the BulkInvoice instances whose public IDs are in the supplied list, or an empty array if the supplied list is null or empty.
   * @param publicIDs A list of the PublicIDs.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  private static function fetchByID<T extends KeyableBean>(publicIDs : String[]) : T[] {
    var results : T[] = {}
    if (publicIDs.HasElements) {
      results = Query.make(T)
          .compareIn(T#PublicID, publicIDs)
          .select()
          .toTypedArray()
      var badIDs = publicIDs.subtract(results*.PublicID)
      if (badIDs.HasElements) throw BadIdentifierException.badPublicId(T, "{" + badIDs.join(", ") + "}")
    }
    return results
  }

  /**
   * Returns the BulkInvoice whose public ID is in the supplied list, or null if the publicID is null.
   * @param publicIDs A list of the PublicIDs.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-03-30T00:00Z")
  private static function fetchByID<T extends KeyableBean>(publicID : String) : T {
    var result : T
    if (publicID != null) {
      result = Query.make(T)
          .compare(T#PublicID, Equals, publicID)
          .select()
          .AtMostOneRow
      if (result == null) throw BadIdentifierException.badPublicId(T, publicID)
    }
    return result
  }

}