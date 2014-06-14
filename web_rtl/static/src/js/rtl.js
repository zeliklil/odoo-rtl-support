openerp.web_rtl = function(instance){
  //console.log('web_rtl module loaded');
  instance.web.WebClient.include({
    start: function(){
      var self = this;
      return $.when(this._super()).then(function() {
        self.set_direction();
      })
    },
    set_direction: function(){
      lang_code = this.session.user_context.lang;
      new instance.web.Model('res.lang').query(['direction'])
          .filter([['code','=',lang_code]])
        .first()
          .then(function(lang){
            console.log(lang.direction);
            $('div.openerp').addClass(lang.direction);
          });
    }
//    show_application: function(){
//      this.set_direction();
//      this._super();
//    }
  });
}
