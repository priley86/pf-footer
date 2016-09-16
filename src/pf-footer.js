(function(){
  var doc = (document._currentScript || document.currentScript).ownerDocument;
  var footerTemplate = doc.querySelector('.pf-footer-template');

  //PfFooter Custom Element
  class PfFooter extends HTMLElement {
    attachedCallback() {
      this.appendChild(document.importNode(footerTemplate.content, true));
    }
  }

  document.registerElement('pf-footer', PfFooter);
})();
