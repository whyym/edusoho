webpackJsonp(["app/js/course-manage/index"],{d14d05cad9e7abf02a5d:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=a.toggleIcon=function(e,a,t){var o=e.find(".js-remove-icon"),n=e.find(".js-remove-text");o.hasClass(a)?(o.removeClass(a).addClass(t),n?n.text(Translator.trans("收起")):""):(o.removeClass(t).addClass(a),n?n.text(Translator.trans("展开")):"")};a.chapterAnimate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-task-chapter",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"es-icon-remove",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"es-icon-anonymous-iconfont";$(e).on("click",a,function(e){var s=$(e.currentTarget);s.nextUntil(a).animate({height:"toggle",opacity:"toggle"},"normal"),t(s,o,n)})}},0:function(e,a,t){"use strict";var o=t(!function(){var e=new Error('Cannot find module "./help"');throw e.code="MODULE_NOT_FOUND",e}()),n=t("d14d05cad9e7abf02a5d");$('[data-help="popover"]').popover();var s="#sortable-list";(0,o.taskSortable)(s),(0,o.updateTaskNum)(s),(0,o.closeCourse)(),(0,o.deleteCourse)(),(0,o.deleteTask)(),(0,o.publishTask)(),(0,o.unpublishTask)(),(0,o.showSettings)(),(0,o.TaskListHeaderFixed)(),$("#sortable-list").on("click",".js-chapter-toggle-show",function(e){var a=$(e.currentTarget),t=a.closest(".js-task-manage-chapter");t.nextUntil(".js-task-manage-chapter").animate({height:"toggle",opacity:"toggle"},"normal"),(0,n.toggleIcon)(t,"es-icon-keyboardarrowdown","es-icon-keyboardarrowup")})}});