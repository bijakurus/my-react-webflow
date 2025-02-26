var $ltMAx$reactjsxruntime = require("react/jsx-runtime");
var $ltMAx$react = require("react");
var $ltMAx$reactdom = require("react-dom");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}



const $9572ff8c7b5759df$var$LoanCalculator = ()=>{
    const [amount, setAmount] = (0, $ltMAx$react.useState)(10000);
    const [rate, setRate] = (0, $ltMAx$react.useState)(5);
    const [term, setTerm] = (0, $ltMAx$react.useState)(12);
    const monthlyPayment = (amount * (rate / 100) / term).toFixed(2);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        style: {
            textAlign: "center",
            padding: "20px",
            border: "1px solid #ccc"
        },
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                children: "Loan Calculator"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                children: "Loan Amount: "
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                type: "number",
                value: amount,
                onChange: (e)=>setAmount(e.target.value)
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                children: "Interest Rate (%): "
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                type: "number",
                value: rate,
                onChange: (e)=>setRate(e.target.value)
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                children: "Term (Months): "
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                type: "number",
                value: term,
                onChange: (e)=>setTerm(e.target.value)
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("p", {
                children: [
                    "Monthly Payment: $",
                    monthlyPayment
                ]
            })
        ]
    });
};
// Render the component inside Webflow
const $9572ff8c7b5759df$var$root = document.getElementById("loan-calculator");
if ($9572ff8c7b5759df$var$root) (0, ($parcel$interopDefault($ltMAx$reactdom))).render(/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)($9572ff8c7b5759df$var$LoanCalculator, {}), $9572ff8c7b5759df$var$root);
var $9572ff8c7b5759df$export$2e2bcd8739ae039 = $9572ff8c7b5759df$var$LoanCalculator;





const $71198867637ace95$var$LeadForm = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
        style: {
            padding: "20px",
            border: "1px solid #ccc"
        },
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                children: "Apply for a Loan"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                type: "text",
                placeholder: "Full Name",
                required: true
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                type: "email",
                placeholder: "Email Address",
                required: true
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                type: "number",
                placeholder: "Loan Amount",
                required: true
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                type: "submit",
                children: "Submit"
            })
        ]
    });
};
// Render the component inside Webflow
const $71198867637ace95$var$root = document.getElementById("lead-form");
if ($71198867637ace95$var$root) (0, ($parcel$interopDefault($ltMAx$reactdom))).render(/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)($71198867637ace95$var$LeadForm, {}), $71198867637ace95$var$root);
var $71198867637ace95$export$2e2bcd8739ae039 = $71198867637ace95$var$LeadForm;




//# sourceMappingURL=index.js.map
