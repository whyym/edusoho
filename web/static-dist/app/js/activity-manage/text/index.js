webpackJsonp(["app/js/activity-manage/text/index"],{"6ff75de42f89cafb6c75":function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.initEditor=function(t,e){var a=CKEDITOR.replace("text-content-field",{toolbar:"Task",filebrowserImageUploadUrl:$("#text-content-field").data("imageUploadUrl"),filebrowserFlashUploadUrl:$("#text-content-field").data("flashUploadUrl"),allowedContent:!0,height:280});return a.on("change",function(){t.val(a.getData()),e&&e.form()}),a.on("blur",function(){t.val(a.getData()),e&&e.form()}),a}},0:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=a("1d0e3cb29c694c31b1b6"),r=n(i);new r.default},"1d0e3cb29c694c31b1b6":function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),r=a("6ff75de42f89cafb6c75");a("d5e8fa5f17ac5fe79c78");var o=function(){function t(e){n(this,t),this._init()}return i(t,[{key:"_init",value:function(){var t=this;this._inItStep2form(),this._inItStep3form(),this._lanuchAutoSave(),$(".js-continue-edit").on("click",function(e){var a=$(e.currentTarget),n=a.data("content");t.editor.setData(n),a.remove()})}},{key:"_inItStep2form",value:function(){var t=$("#step2-form"),e=t.data("validator");e=t.validate({rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},content:{required:!0,trim:!0}}});var a=$('[name="content"]');this.editor=(0,r.initEditor)(a,e),this._contentCache=a.val()}},{key:"_lanuchAutoSave",value:function(){var t=this,e=$("#modal .modal-title",parent.document);this._originTitle=e.text(),setInterval(function(){t._saveDraft()},5e3)}},{key:"_saveDraft",value:function(){var t=this,e=this.editor.getData(),a=e!==this._contentCache;if(a){var n=$('[name="content"]');$.post(n.data("saveDraftUrl"),{content:e}).done(function(){var a=new Date,n=$("#modal .modal-title",parent.document),i=Translator.trans("site.date_format_his",{hours:a.getHours(),minutes:a.getMinutes(),seconds:a.getSeconds()});n.text(t._originTitle+Translator.trans("activity.text_manage.save_draft_hint",{createdTime:i})),t._contentCache=e})}}},{key:"_inItStep3form",value:function(){var t=$("#step3-form"),e=t.data("validator");e=t.validate({rules:{finishDetail:{required:!0,positive_integer:!0,max:300}},messages:{finishDetail:{required:Translator.trans("activity.text_manage.finish_detail_required_error_hint")}}})}}]),t}();e.default=o}});