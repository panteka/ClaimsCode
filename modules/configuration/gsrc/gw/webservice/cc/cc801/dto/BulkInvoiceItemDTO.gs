package gw.webservice.cc.cc801.dto

uses gw.api.database.Query
uses gw.api.util.StringUtil
uses gw.api.webservice.exception.BadIdentifierException
uses gw.pl.persistence.core.Bundle
uses gw.xml.ws.annotation.WsiExportable
uses java.lang.Integer
uses java.util.Date
uses javax.annotation.Generated

/**
 * <p style="border: 1px solid black; padding: 10px">This Data Transfer Object ("DTO") class is used to generate a WSDL to serialize and deserialize information across the network. Any change to the public properties of this DTO class will change the WSDL, thus breaking any existing clients. So once the corresponding WSDL is in use this DTO should only be changed with extreme caution, as it will require existing clients to be rebuilt and redeployed.<br/><br/>
DTOs which are a simple mapping from the domain model may be auto-generated using the "WSI DTO Generator", available from the customer portal. This generator can significantly speed up initial coding of such DTOs. Always remember, however, that DTOs are a network interface and a simple mapping from the domain model may not provide the best results. Remember too that once a DTO has been used in a deployed WSDL, re-running the generator may break existing clients (see above). Please read the documentation in the accelerator for guidance.</p><br/>
 * A(n) {@link BulkInvoiceItemDTO} is a DTO that represents an instance of {@link entity.BulkInvoiceItem} for use by certain WS-I Web Services in the base product. This file is composed of basic getters and setters, plus members that make it easier for server-side code to work with DTOs, like virtual getters that query for entities by PublicID, and methods to copy fields to or from an instance of {@link entity.BulkInvoiceItem}.
 * <p>None of these methods constrain how an instance of BulkInvoiceItemDTO is created, initialized or used (beyond the normal Gosu type checking): this is consistent with the <a href="http://en.wikipedia.org/wiki/Data_transfer_object">DTO Design Pattern</a>, which states that "DTOs are simple objects that should not contain any business logic that would require testing". Validation logic that considers whether a DTO field can have a <i>particular</i> value (based on things like effective dates, jurisdictions, line of business, user permissions, the values of other fields, etc.) should not be handled here, but rather by the API that manipulates the BulkInvoiceItemDTO.
 * <p>Please read the documentation in the accelerator before reusing this class in any additional WS-I Web Services.</p>
 * <p>Fields are mapped according to the following rules:
 * <ul><li>Primitive values are copied directly</li><li>Typekey fields are copied directly (the WS-I layer translates them to/from WS-I enums)</li><li>Foreign keys fields are represented by the target object's PublicID</li><li>Arraykey fields are represented by an array of the PublicIDs of the elements in the array</li></ul></p>
 * <p>The specific mappings for {@link BulkInvoiceItemDTO} are as follows:
 * <table border="1"><tr><th>Field</th><th>Maps to</th></tr><tr><td>Amount</td><td>BulkInvoiceItem.Amount</td></tr><tr><td>BulkInvoiceID</td><td>BulkInvoiceItem.BulkInvoice.PublicID</td></tr><tr><td>BulkInvoiceOrder</td><td>BulkInvoiceItem.BulkInvoiceOrder</td></tr><tr><td>ClaimID</td><td>BulkInvoiceItem.Claim.PublicID</td></tr><tr><td>CostCategory</td><td>BulkInvoiceItem.CostCategory</td></tr><tr><td>CostType</td><td>BulkInvoiceItem.CostType</td></tr><tr><td>CreateTime</td><td>BulkInvoiceItem.CreateTime</td></tr><tr><td>CreateUserID</td><td>BulkInvoiceItem.CreateUser.PublicID</td></tr><tr><td>DateOfService</td><td>BulkInvoiceItem.DateOfService</td></tr><tr><td>DeductionsAmount</td><td>BulkInvoiceItem.DeductionsAmount</td></tr><tr><td>Description</td><td>BulkInvoiceItem.Description</td></tr><tr><td>Explanation</td><td>BulkInvoiceItem.Explanation</td></tr><tr><td>ExposureID</td><td>BulkInvoiceItem.Exposure.PublicID</td></tr><tr><td>NonEroding</td><td>BulkInvoiceItem.NonEroding</td></tr><tr><td>PaymentType</td><td>BulkInvoiceItem.PaymentType</td></tr><tr><td>PublicID</td><td>BulkInvoiceItem.PublicID</td></tr><tr><td>ReservingCurrency</td><td>BulkInvoiceItem.ReservingCurrency</td></tr><tr><td>ServicePdEnd</td><td>BulkInvoiceItem.ServicePdEnd</td></tr><tr><td>ServicePdStart</td><td>BulkInvoiceItem.ServicePdStart</td></tr><tr><td>Status</td><td>BulkInvoiceItem.Status</td></tr><tr><td>UpdateTime</td><td>BulkInvoiceItem.UpdateTime</td></tr><tr><td>UpdateUserID</td><td>BulkInvoiceItem.UpdateUser.PublicID</td></tr></table></p>
 * <br/>This file was generated using the following property definitions:<br/><pre>BulkInvoiceItem#Amount,            // gw.api.financials.CurrencyAmount<br/>BulkInvoiceItem#BulkInvoice,       // BulkInvoice<br/>BulkInvoiceItem#BulkInvoiceOrder,  // Integer<br/>BulkInvoiceItem#Claim,             // Claim<br/>BulkInvoiceItem#CostCategory,      // typekey.CostCategory<br/>BulkInvoiceItem#CostType,          // typekey.CostType<br/>BulkInvoiceItem#DateOfService,     // java.util.Date<br/>BulkInvoiceItem#DeductionsAmount,  // gw.api.financials.CurrencyAmount<br/>BulkInvoiceItem#Description,       // String<br/>BulkInvoiceItem#Explanation,       // String<br/>BulkInvoiceItem#Exposure,          // Exposure<br/>BulkInvoiceItem#NonEroding,        // Boolean<br/>BulkInvoiceItem#PaymentType,       // typekey.PaymentType<br/>BulkInvoiceItem#ReservingCurrency, // typekey.Currency<br/>BulkInvoiceItem#ServicePdEnd,      // java.util.Date<br/>BulkInvoiceItem#ServicePdStart,    // java.util.Date<br/>BulkInvoiceItem#Status             // typekey.BulkInvoiceItemStatus</pre>
 */
@Export
@WsiExportable("http://guidewire.com/cc/ws/gw/webservice/cc/cc801/dto/BulkInvoiceItemDTO")
@Generated("DTOBuilder", "DO NOT edit this class directly! See comments at the top of the file.", "2014-04-08T00:16Z")
final class BulkInvoiceItemDTO {
  var _amount              : gw.api.financials.CurrencyAmount as Amount
  /** Derived from BulkInvoiceItem#BulkInvoice.PublicID */
  var _bulkInvoiceID       : String                           as BulkInvoiceID
  var _bulkInvoiceItemInfo : BulkInvoiceItemInfoDTO           as BulkInvoiceItemInfo
  var _bulkInvoiceOrder    : Integer                          as BulkInvoiceOrder
  /** Derived from BulkInvoiceItem#Claim.PublicID */
  var _claimID             : String                           as ClaimID
  var _costCategory        : CostCategory                     as CostCategory
  var _costType            : CostType                         as CostType
  var _createTime          : Date                             as CreateTime
  /** Derived from Editable#CreateUser.PublicID */
  var _createUserID        : String                           as CreateUserID
  var _dateOfService       : Date                             as DateOfService
  var _deductionsAmount    : gw.api.financials.CurrencyAmount as DeductionsAmount
  var _description         : String                           as Description
  var _explanation         : String                           as Explanation
  /** Derived from BulkInvoiceItem#Exposure.PublicID */
  var _exposureID          : String                           as ExposureID
  var _nonEroding          : Boolean                          as NonEroding
  var _paymentType         : PaymentType                      as PaymentType
  var _publicID            : String                           as PublicID
  var _reservingCurrency   : Currency                         as ReservingCurrency
  var _servicePdEnd        : Date                             as ServicePdEnd
  var _servicePdStart      : Date                             as ServicePdStart
  var _status              : BulkInvoiceItemStatus            as Status
  var _updateTime          : Date                             as UpdateTime
  /** Derived from Editable#UpdateUser.PublicID */
  var _updateUserID        : String                           as UpdateUserID

  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-04-08T00:00Z")
  construct() { }

  /**
   * Copies the platform-managed fields from the supplied BulkInvoiceItem
   * @param that The BulkInvoiceItem to copy from.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-04-08T00:00Z")
  protected function _copyReadOnlyFieldsFrom(that : BulkInvoiceItem) {
    // if field is on base class
      _createTime          = that.CreateTime
      _createUserID        = that.CreateUser.PublicID
      _deductionsAmount    = that.DeductionsAmount
      _updateTime          = that.UpdateTime
      _updateUserID        = that.UpdateUser.PublicID
    //
  }

  /**
   * Set the fields in this DTO using the supplied BulkInvoiceItem
   * @param that The BulkInvoiceItem to copy from.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-04-08T00:00Z")
  final function readFrom(that : BulkInvoiceItem) : BulkInvoiceItemDTO {
    _copyReadOnlyFieldsFrom(that)

    // if field is on base class
      Amount               = that.Amount
      BulkInvoiceID        = that.BulkInvoice.PublicID
      BulkInvoiceOrder     = that.BulkInvoiceOrder
      ClaimID              = that.Claim.PublicID
      CostCategory         = that.CostCategory
      CostType             = that.CostType
      DateOfService        = that.DateOfService
      Description          = that.Description
      Explanation          = that.Explanation
      ExposureID           = that.Exposure.PublicID
      NonEroding           = that.NonEroding
      PaymentType          = that.PaymentType
      PublicID             = that.PublicID
      ReservingCurrency    = that.ReservingCurrency
      ServicePdEnd         = that.ServicePdEnd
      ServicePdStart       = that.ServicePdStart
      Status               = that.Status
    //
    return this
  }

  /**
   * Update the supplied BulkInvoiceItem using the field values stored in this DTO
   * @param that The BulkInvoiceItem to update.
   * @param (Optional) ignoreNullValues If {@code true}, only those fields that are non-null are used (i.e. the null-valued fields are treated as if they were unspecified). If {@code false}, every DTO field will be used to update the BulkInvoiceItem, even those that are null. Usually you will want this to be {@code true}.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-04-08T00:00Z")
  final function writeTo(that : BulkInvoiceItem, ignoreNullValues = true) : BulkInvoiceItem {
    _copyReadOnlyFieldsFrom(that)

    // if field is on base class
      if (Amount              != null or !ignoreNullValues) that.Amount              = Amount
      if (BulkInvoiceID       != null or !ignoreNullValues) that.BulkInvoice         = BulkInvoice
      if (BulkInvoiceOrder    != null or !ignoreNullValues) that.BulkInvoiceOrder    = BulkInvoiceOrder
      if (ClaimID             != null or !ignoreNullValues) that.Claim               = Claim
      if (CostCategory        != null or !ignoreNullValues) that.CostCategory        = CostCategory
      if (CostType            != null or !ignoreNullValues) that.CostType            = CostType
      if (DateOfService       != null or !ignoreNullValues) that.DateOfService       = DateOfService
      if (Description         != null or !ignoreNullValues) that.Description         = Description
      if (Explanation         != null or !ignoreNullValues) that.Explanation         = Explanation
      if (ExposureID          != null or !ignoreNullValues) that.Exposure            = Exposure
      if (NonEroding          != null or !ignoreNullValues) that.NonEroding          = NonEroding
      if (PaymentType         != null or !ignoreNullValues) that.PaymentType         = PaymentType
      if (PublicID            != null or !ignoreNullValues) that.PublicID            = PublicID
      if (ReservingCurrency   != null or !ignoreNullValues) that.ReservingCurrency   = ReservingCurrency
      if (ServicePdEnd        != null or !ignoreNullValues) that.ServicePdEnd        = ServicePdEnd
      if (ServicePdStart      != null or !ignoreNullValues) that.ServicePdStart      = ServicePdStart
      if (Status              != null or !ignoreNullValues) that.Status              = Status
    //
    return that
  }

  /**
   * Uses the createNew block to create a new BulkInvoiceItem, adds it to the supplied bundle, then updates it using the field values stored in this DTO. The ignoreNullValues parameter controls how the fields that are null are treated.
   * @param bundle The bundle in which to create the new BulkInvoiceItem.
   * @param createNew (Optional) A block that returns a new instance of BulkInvoiceItem. If this is null, the default constructor will be used.
   * @param ignoreNullValues (Optional) If {@code true}, only those fields that are non-null are used (i.e. the null-valued fields are treated as if they were unspecified). If {@code false}, every DTO field will be used to update the BulkInvoiceItem, even those that are null. Usually you will want this to be {@code true}.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-04-08T00:00Z")
  final function writeToNewEntityIn(bundle : Bundle, createNew : block() : BulkInvoiceItem = null, ignoreNullValues = true) : BulkInvoiceItem {
    var instance : BulkInvoiceItem
    if (createNew == null) {
      instance = bundle == null
          ? new BulkInvoiceItem()
          : new BulkInvoiceItem(bundle)
    }
    else {
      instance = createNew()

      if (bundle != null) {
        instance = bundle.add(instance)
      }
    }
    return writeTo(instance, ignoreNullValues)
  }

  /** Convenience property that returns the {@link BulkInvoice} whose PublicID is {@code BulkInvoiceID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-04-08T00:00Z")
  property get BulkInvoice()      : BulkInvoice                     { return fetchByID(BulkInvoiceID) }
  
  /** Convenience property that returns the {@link Claim} whose PublicID is {@code ClaimID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-04-08T00:00Z")
  property get Claim()            : Claim                           { return fetchByID(ClaimID) }
  
  /** Convenience property that returns the {@link User} whose PublicID is {@code CreateUserID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-04-08T00:00Z")
  property get CreateUser()       : User                            { return fetchByID(CreateUserID) }
  
  /** Convenience property that returns the {@link Exposure} whose PublicID is {@code ExposureID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-04-08T00:00Z")
  property get Exposure()         : Exposure                        { return fetchByID(ExposureID) }
  
  /** Convenience property that returns the {@link User} whose PublicID is {@code UpdateUserID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-04-08T00:00Z")
  property get UpdateUser()       : User                            { return fetchByID(UpdateUserID) }

  /**
   * Returns whether the fields tracked by this DTO match the same fields in the other DTO
   * @param that The BulkInvoiceItemDTO to compare against.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-04-08T00:00Z")
  override final function equals(that : Object) : boolean {
    if (that typeis BulkInvoiceItemDTO) {
      return Amount              == that.Amount
         and BulkInvoiceID       == that.BulkInvoiceID
         and BulkInvoiceItemInfo == that.BulkInvoiceItemInfo
         and BulkInvoiceOrder    == that.BulkInvoiceOrder
         and ClaimID             == that.ClaimID
         and CostCategory        == that.CostCategory
         and CostType            == that.CostType
         and DateOfService       == that.DateOfService
         and Description         == that.Description
         and Explanation         == that.Explanation
         and ExposureID          == that.ExposureID
         and NonEroding          == that.NonEroding
         and PaymentType         == that.PaymentType
         and PublicID            == that.PublicID
         and ReservingCurrency   == that.ReservingCurrency
         and ServicePdEnd        == that.ServicePdEnd
         and ServicePdStart      == that.ServicePdStart
         and Status              == that.Status
    }
    return super.equals(that)
  }

  /**
   * Returns the hash code of this object.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-04-08T00:00Z")
  override final function hashCode() : int {
    return {
      Amount,
      BulkInvoiceID,
      BulkInvoiceItemInfo,
      BulkInvoiceOrder,
      ClaimID,
      CostCategory,
      CostType,
      DateOfService,
      Description,
      Explanation,
      ExposureID,
      NonEroding,
      PaymentType,
      PublicID,
      ReservingCurrency,
      ServicePdEnd,
      ServicePdStart,
      Status
    }.reduce(17, \ hashCode, obj -> 31 * hashCode + obj?.hashCode())
  }

  /**
   * Provides a rough idea of the command needed to re-create this DTO. Because it is rough it is probably only  useful for debugging purposes.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-04-08T00:00Z")
  override final function toString() : String {
    var fields = {} as List<String>

    if (Amount               != null  ) fields.add(':Amount              = ' + Amount)
    if (BulkInvoiceID      .HasContent) fields.add(':BulkInvoiceID       = ' + StringUtil.enquote(BulkInvoiceID))
    if (BulkInvoiceItemInfo  != null  ) fields.add(':BulkInvoiceItemInfo = ' + BulkInvoiceItemInfo)
    if (BulkInvoiceOrder     != null  ) fields.add(':BulkInvoiceOrder    = ' + BulkInvoiceOrder)
    if (ClaimID            .HasContent) fields.add(':ClaimID             = ' + StringUtil.enquote(ClaimID))
    if (CostCategory         != null  ) fields.add(':CostCategory        = CostCategory.get("' + CostCategory.Code + '")')
    if (CostType             != null  ) fields.add(':CostType            = CostType.get("' + CostType.Code + '")')
    if (CreateTime           != null  ) fields.add(':CreateTime          = ' + StringUtil.enquote(CreateTime.toString()) + ' as Date')
    if (CreateUserID       .HasContent) fields.add(':CreateUserID        = ' + StringUtil.enquote(CreateUserID))
    if (DateOfService        != null  ) fields.add(':DateOfService       = ' + StringUtil.enquote(DateOfService.toString()) + ' as Date')
    if (DeductionsAmount     != null  ) fields.add(':DeductionsAmount    = ' + DeductionsAmount)
    if (Description        .HasContent) fields.add(':Description         = ' + StringUtil.enquote(Description))
    if (Explanation        .HasContent) fields.add(':Explanation         = ' + StringUtil.enquote(Explanation))
    if (ExposureID         .HasContent) fields.add(':ExposureID          = ' + StringUtil.enquote(ExposureID))
    if (NonEroding           != null  ) fields.add(':NonEroding          = ' + NonEroding)
    if (PaymentType          != null  ) fields.add(':PaymentType         = PaymentType.get("' + PaymentType.Code + '")')
    if (PublicID           .HasContent) fields.add(':PublicID            = ' + StringUtil.enquote(PublicID))
    if (ReservingCurrency    != null  ) fields.add(':ReservingCurrency   = Currency.get("' + ReservingCurrency.Code + '")')
    if (ServicePdEnd         != null  ) fields.add(':ServicePdEnd        = ' + StringUtil.enquote(ServicePdEnd.toString()) + ' as Date')
    if (ServicePdStart       != null  ) fields.add(':ServicePdStart      = ' + StringUtil.enquote(ServicePdStart.toString()) + ' as Date')
    if (Status               != null  ) fields.add(':Status              = BulkInvoiceItemStatus.get("' + Status.Code + '")')
    if (UpdateTime           != null  ) fields.add(':UpdateTime          = ' + StringUtil.enquote(UpdateTime.toString()) + ' as Date')
    if (UpdateUserID       .HasContent) fields.add(':UpdateUserID        = ' + StringUtil.enquote(UpdateUserID))

    return "new BulkInvoiceItemDTO() {\n  " + fields.join(",\n  ") + "\n}"
  }

  /**
   * return a new BulkInvoiceItemDTO that represents the current state of the supplied BulkInvoiceItem.
   * @param that The BulkInvoiceItem to be represented.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-04-08T00:00Z")
  static function valueOf(that : BulkInvoiceItem) : BulkInvoiceItemDTO {
    return new BulkInvoiceItemDTO().readFrom(that)
  }

  /**
   * Returns the BulkInvoiceItem whose public ID is in the supplied list, or null if the publicID is null.
   * @param publicIDs A list of the PublicIDs.
   */
  @Generated("DTOBuilder", "DO NOT edit this method directly! See comments at the top of the file.", "2014-04-08T00:00Z")
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