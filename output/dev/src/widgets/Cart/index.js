dojoWebpackJsonpspod(["src/widgets/Cart/index"],{

/***/ "./src/widgets/Cart/Cart.const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CAPTIONS = {
    title: 'Cart of',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = CAPTIONS;



/***/ }),

/***/ "./src/widgets/Cart/Cart.m.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {" _key":"Aspod/Cart","root":"Cart-m__root__3Giwl","header":"Cart-m__header__D8f3-"};

/***/ }),

/***/ "./src/widgets/Cart/Cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dojo_framework_widget_core_WidgetBase__ = __webpack_require__("./node_modules/@dojo/framework/widget-core/WidgetBase.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dojo_framework_widget_core_d__ = __webpack_require__("./node_modules/@dojo/framework/widget-core/d.mjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Cart_const__ = __webpack_require__("./src/widgets/Cart/Cart.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cart_m_css__ = __webpack_require__("./src/widgets/Cart/Cart.m.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cart_m_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Cart_m_css__);




class Cart extends __WEBPACK_IMPORTED_MODULE_0__dojo_framework_widget_core_WidgetBase__["b" /* default */] {
    render() {
        const { user } = this.properties;
        return Object(__WEBPACK_IMPORTED_MODULE_1__dojo_framework_widget_core_d__["h" /* v */])('h1', { classes: [__WEBPACK_IMPORTED_MODULE_3__Cart_m_css__["header"]] }, [`${__WEBPACK_IMPORTED_MODULE_2__Cart_const__["a" /* CAPTIONS */].title} ${user.name}!`]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Cart;



/***/ }),

/***/ "./src/widgets/Cart/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cart__ = __webpack_require__("./src/widgets/Cart/Cart.ts");

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Cart__["a" /* default */]);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9DYXJ0L0NhcnQuY29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZGdldHMvQ2FydC9DYXJ0Lm0uY3NzPzA3NjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZGdldHMvQ2FydC9DYXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL0NhcnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTSxRQUFRLEdBQUc7SUFDdEIsS0FBSyxFQUFFLFNBQVM7Q0FDakIsQ0FBQztBQUFBO0FBQUE7Ozs7Ozs7O0FDRkY7QUFDQSxrQkFBa0Isb0Y7Ozs7Ozs7O0FDRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0U7QUFDZDtBQUdWO0FBQ0o7QUFNckIsVUFBVyxTQUFRLHVGQUEwQjtJQUNqRCxNQUFNO1FBQ2YsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDakMsTUFBTSxDQUFDLGdGQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsbURBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLDZEQUFRLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztDQUNEO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDaEJEO0FBQUE7QUFBMkI7QUFFWixxSEFBSSxFQUFDIiwiZmlsZSI6InNyYy93aWRnZXRzL0NhcnQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ0FQVElPTlMgPSB7XHJcbiAgdGl0bGU6ICdDYXJ0IG9mJyxcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL0Bkb2pvL3dlYnBhY2stY29udHJpYi9jc3MtbW9kdWxlLWR0cy1sb2FkZXI/dHlwZT10cyZpbnN0YW5jZU5hbWU9MF9kb2pvIS4vc3JjL3dpZGdldHMvQ2FydC9DYXJ0LmNvbnN0LnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiIF9rZXlcIjpcIkFzcG9kL0NhcnRcIixcInJvb3RcIjpcIkNhcnQtbV9fcm9vdF9fM0dpd2xcIixcImhlYWRlclwiOlwiQ2FydC1tX19oZWFkZXJfX0Q4ZjMtXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3dpZGdldHMvQ2FydC9DYXJ0Lm0uY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy93aWRnZXRzL0NhcnQvQ2FydC5tLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IHNyYy93aWRnZXRzL0NhcnQvaW5kZXgiLCJpbXBvcnQgV2lkZ2V0QmFzZSBmcm9tICdAZG9qby9mcmFtZXdvcmsvd2lkZ2V0LWNvcmUvV2lkZ2V0QmFzZSc7XG5pbXBvcnQgeyB2IH0gZnJvbSAnQGRvam8vZnJhbWV3b3JrL3dpZGdldC1jb3JlL2QnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vZGF0YS91c2VyJztcbmltcG9ydCB7IENBUFRJT05TIH0gZnJvbSAnLi9DYXJ0LmNvbnN0JztcbmltcG9ydCAqIGFzIGNzcyBmcm9tICcuL0NhcnQubS5jc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcnRQcm9wZXJ0aWVzIHtcblx0dXNlcjogVXNlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIFdpZGdldEJhc2U8Q2FydFByb3BlcnRpZXM+IHtcblx0cHJvdGVjdGVkIHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHVzZXIgfSA9IHRoaXMucHJvcGVydGllcztcblx0XHRyZXR1cm4gdignaDEnLCB7IGNsYXNzZXM6IFtjc3MuaGVhZGVyXSB9LCBbYCR7Q0FQVElPTlMudGl0bGV9ICR7dXNlci5uYW1lfSFgXSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AZG9qby93ZWJwYWNrLWNvbnRyaWIvY3NzLW1vZHVsZS1kdHMtbG9hZGVyP3R5cGU9dHMmaW5zdGFuY2VOYW1lPTBfZG9qbyEuL3NyYy93aWRnZXRzL0NhcnQvQ2FydC50cyIsImltcG9ydCBDYXJ0ICBmcm9tICcuL0NhcnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL0Bkb2pvL3dlYnBhY2stY29udHJpYi9jc3MtbW9kdWxlLWR0cy1sb2FkZXI/dHlwZT10cyZpbnN0YW5jZU5hbWU9MF9kb2pvIS4vc3JjL3dpZGdldHMvQ2FydC9pbmRleC50cyJdLCJzb3VyY2VSb290IjoiIn0=