package gw.solr.request

uses com.guidewire.cc.system.config.CCConfigResourceKeys
uses org.json.simple.JSONObject

/**
 * Solr index document for archived Claims.
 */
@Export
class ClaimContactArchiveDocument extends AbstractIndexDocument {
  
  var _jsonDoc : JSONObject
  
  static function createDocument(docObj : JSONObject) : ClaimContactArchiveDocument {
    var document = new ClaimContactArchiveDocument()
    document.constructDocument(docObj)
    return document
  }
  
  construct() {
    super(CCConfigResourceKeys.CLAIMCONTACT_SEARCH_CONFIG.File)
  }
  
  function constructDocument(jsonDoc : JSONObject) {
    _jsonDoc = jsonDoc
  }
  
  override function asJSON() : JSONObject {
    return _jsonDoc
  }

}
