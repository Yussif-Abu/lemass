import {
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  GraduationCap,
  MapPin,
  ReceiptText,
  ShieldCheck,
  Trophy,
  XCircle,
} from "lucide-react";

const graduationOverview = [
  {
    label: "Graduation Date",
    value: "July 2, 2026",
    icon: CalendarDays,
  },
  {
    label: "Ceremony Venue",
    value: "ATTC Hall",
    icon: MapPin,
  },
  {
    label: "Requirements Met",
    value: "4 / 6",
    icon: Trophy,
  },
];

const timeline = [
  {
    title: "Capstone Final Submission Deadline",
    month: "Jan, 2026",
    icon: ReceiptText,
    done: true,
  },
  {
    title: "Graduation Application Opens",
    month: "Feb, 2026",
    icon: GraduationCap,
    done: false,
  },
  {
    title: "Graduation Fee Payment Deadline",
    month: "Mar, 2026",
    icon: ReceiptText,
    done: false,
  },
  {
    title: "Gown & Cap Collection",
    month: "Apr, 2026",
    icon: ShieldCheck,
    done: false,
  },
  {
    title: "Graduation Rehearsal",
    month: "May, 2026",
    icon: CheckCircle2,
    done: false,
  },
  {
    title: "Graduation Ceremony",
    month: "June, 2026",
    icon: Trophy,
    done: false,
  },
];

const feeBreakdown = [
  { label: "Graduation Fees", value: "GHC 500" },
  { label: "Gown & Cap Rental", value: "GHC 600" },
  { label: "Certificate Processing", value: "GHC 250" },
  { label: "Total", value: "GHC 13,050", highlight: true },
];

const requirements = [
  { label: "Complete all required courses", status: "pending", ok: false },
  { label: "Minimum GPA of 2.0", status: "done", ok: true },
  { label: "Complete capstone project", status: "pending", ok: false },
  { label: "Clear all outstanding fees", status: "pending", ok: false },
  { label: "Complete internship requirements", status: "done", ok: true },
  { label: "Submit graduation application", status: "pending", ok: false },
];

const Graduation = () => {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4">
        <div className="grid gap-3 md:grid-cols-3">
          {graduationOverview.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-[0_1px_0_rgba(15,23,42,0.03)]"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-slate-900">
                    {value}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.03)]">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">
            Timeline
          </h2>

          <div className="space-y-3">
            {timeline.map(({ title, month, icon: Icon, done }, index) => (
              <div key={title} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="mt-1 h-7 w-px bg-slate-200" />
                  )}
                </div>

                <div className="flex-1 rounded-lg px-2 py-1">
                  <p className="text-[15px] font-medium text-slate-900">
                    {title}
                  </p>
                  <p className="text-sm text-slate-500">{month}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.03)]">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Graduation Costs
            </h2>

            <div className="space-y-3 text-sm text-slate-700">
              {feeBreakdown.map(({ label, value, highlight }) => (
                <div
                  key={label}
                  className={`flex items-center justify-between gap-3 ${highlight ? "border-t border-slate-200 pt-3 font-semibold text-slate-900" : ""}`}
                >
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.03)]">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Graduation Requirements
            </h2>

            <div className="space-y-3 text-sm">
              {requirements.map(({ label, ok }) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full ${ok ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"}`}
                  >
                    {ok ? (
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    ) : (
                      <CircleAlert className="h-3.5 w-3.5" />
                    )}
                  </div>
                  <span className={ok ? "text-slate-700" : "text-slate-700"}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graduation;
