import {
  useLocation
} from "/build/_shared/chunk-HMOKSK3P.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-6BU2FOO7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/listPeserta.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\listPeserta.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\listPeserta.jsx"
  );
  import.meta.hot.lastModified = "1715095876596.6018";
}
var ListPeserta = () => {
  _s();
  const location = useLocation();
  const dataPeserta = location.state.dataPeserta.data;
  console.log(dataPeserta);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-screen flex-wrap flex-1 justify-center items-center bg-cover bg-no-repeat bg-gradient-to-b from-indigo-600 to-pink-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-[#FFC300] mb-6", children: "LIST PESERTA" }, void 0, false, {
      fileName: "app/routes/listPeserta.jsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full border-collapse", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-gray-100", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "border border-gray-300 px-4 py-2", children: "No" }, void 0, false, {
          fileName: "app/routes/listPeserta.jsx",
          lineNumber: 35,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "border border-gray-300 px-4 py-2", children: "Nama" }, void 0, false, {
          fileName: "app/routes/listPeserta.jsx",
          lineNumber: 36,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "border border-gray-300 px-4 py-2", children: "NPM" }, void 0, false, {
          fileName: "app/routes/listPeserta.jsx",
          lineNumber: 37,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "border border-gray-300 px-4 py-2", children: "Angkatan" }, void 0, false, {
          fileName: "app/routes/listPeserta.jsx",
          lineNumber: 38,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "border border-gray-300 px-4 py-2", children: "Program Studi" }, void 0, false, {
          fileName: "app/routes/listPeserta.jsx",
          lineNumber: 39,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/listPeserta.jsx",
        lineNumber: 34,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/listPeserta.jsx",
        lineNumber: 33,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: dataPeserta.map((peserta, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "text-center bg-slate-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "border border-gray-300 px-4 py-2", children: index + 1 }, void 0, false, {
          fileName: "app/routes/listPeserta.jsx",
          lineNumber: 44,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "border border-gray-300 px-4 py-2", children: peserta.fullName }, void 0, false, {
          fileName: "app/routes/listPeserta.jsx",
          lineNumber: 45,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "border border-gray-300 px-4 py-2", children: peserta.npm }, void 0, false, {
          fileName: "app/routes/listPeserta.jsx",
          lineNumber: 46,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "border border-gray-300 px-4 py-2", children: peserta.angkatan }, void 0, false, {
          fileName: "app/routes/listPeserta.jsx",
          lineNumber: 47,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "border border-gray-300 px-4 py-2", children: peserta.programStudi }, void 0, false, {
          fileName: "app/routes/listPeserta.jsx",
          lineNumber: 48,
          columnNumber: 33
        }, this)
      ] }, index, true, {
        fileName: "app/routes/listPeserta.jsx",
        lineNumber: 43,
        columnNumber: 62
      }, this)) }, void 0, false, {
        fileName: "app/routes/listPeserta.jsx",
        lineNumber: 42,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/listPeserta.jsx",
      lineNumber: 32,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/listPeserta.jsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "flex justify-end items-end pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "text-sm w-full p-2 rounded-lg bg-blue-500 text-yellow-400 hover:font-extrabold hover:underline hover:p-3", children: "Login Page" }, void 0, false, {
      fileName: "app/routes/listPeserta.jsx",
      lineNumber: 55,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/listPeserta.jsx",
      lineNumber: 54,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/listPeserta.jsx",
      lineNumber: 53,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/listPeserta.jsx",
    lineNumber: 29,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/listPeserta.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_s(ListPeserta, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c = ListPeserta;
var listPeserta_default = ListPeserta;
var _c;
$RefreshReg$(_c, "ListPeserta");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  listPeserta_default as default
};
//# sourceMappingURL=/build/routes/listPeserta-FS3MI3J5.js.map
