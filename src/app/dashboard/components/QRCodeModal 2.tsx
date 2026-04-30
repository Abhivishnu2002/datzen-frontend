type QRCodeModalProps = {
  open: boolean;
  paymentId?: string;
  amount?: number;
  name?: string;
  onClose: () => void;
};

export function QRCodeModal({ open, paymentId, amount, name, onClose }: QRCodeModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-[var(--bg-secondary,#0b1220)] p-5"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="text-lg font-semibold text-white">Scan QR to Pay</h3>
        <p className="mt-1 text-xs text-[var(--text-secondary,#94a3b8)]">
          Basic modal scaffold. Connect this to real QR payload next.
        </p>

        <div className="mt-4 rounded-xl border border-dashed border-white/20 bg-white/5 p-6 text-center">
          <p className="text-sm font-medium text-white">Placeholder QR</p>
          <p className="mt-1 text-xs text-[var(--text-secondary,#94a3b8)]">
            Payment ID: {paymentId ?? "--"}
          </p>
          <p className="mt-1 text-xs text-[var(--text-secondary,#94a3b8)]">
            Amount: {typeof amount === "number" ? `Rs ${amount.toLocaleString("en-IN")}` : "--"}
          </p>
          <p className="mt-1 text-xs text-[var(--text-secondary,#94a3b8)]">Customer: {name ?? "--"}</p>
        </div>

        <button
          type="button"
          className="mt-4 w-full rounded-lg border border-white/10 bg-white/10 py-2 text-sm font-medium text-white transition hover:bg-white/15"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
