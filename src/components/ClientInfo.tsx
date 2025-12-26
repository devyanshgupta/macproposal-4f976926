import { motion } from "framer-motion";
import { Bold, List } from "lucide-react";

interface ClientInfoProps {
  clientName: string;
  contactNo: string;
  email: string;
  address: string;
  CIN: string;
  preparedBy: string;
  proposalDate: string;
  greeting: string;
  para: string; // Added new field for paragraph
  onFieldChange: (field: string, value: string) => void;
}

export const ClientInfo = ({
  clientName,
  contactNo,
  email,
  address,
  CIN,
  preparedBy,
  proposalDate,
  greeting,
  para, // Added new field for paragraph
  onFieldChange,
}: ClientInfoProps) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-background border-b border-border top-[80px] z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">Client Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label htmlFor="client-name" className="text-sm font-medium text-foreground/70 mb-2">
              Client Name
            </label>
            <input
              id="client-name"
              type="text"
              placeholder="Enter client name"
              value={clientName}
              onChange={(e) => onFieldChange("name", e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="client-contact-no" className="text-sm font-medium text-foreground/70 mb-2">
              Contact No.
            </label>
            <input
              id="client-contact-no"
              type="text"
              placeholder="Enter Contact No."
              value={contactNo}
              onChange={(e) => onFieldChange("contactNo", e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="client-email" className="text-sm font-medium text-foreground/70 mb-2">
              Email
            </label>
            <input
              id="client-email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => onFieldChange("email", e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="client-address" className="text-sm font-medium text-foreground/70 mb-2">
              Client Address
            </label>
            <input
              id="client-address"
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(e) => onFieldChange("address", e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="client-CIN" className="text-sm font-medium text-foreground/70 mb-2">
              Client CIN Number
            </label>
            <input
              id="client-CIN"
              type="text"
              placeholder="Enter CIN"
              value={CIN}
              onChange={(e) => onFieldChange("CIN", e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="prepared-by" className="text-sm font-medium text-foreground/70 mb-2">
              Prepared By
            </label>
            <input
              id="prepared-by"
              type="text"
              placeholder="Your firm name"
              value={preparedBy}
              onChange={(e) => onFieldChange("preparedBy", e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="proposal-date" className="text-sm font-medium text-foreground/70 mb-2">
              Proposal Date
            </label>
            <input
              id="proposal-date"
              type="date"
              value={proposalDate}
              onChange={(e) => onFieldChange("date", e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          {/* New paragraph field */}
          <div className="flex flex-col md:col-span-3">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="para" className="text-sm font-medium text-foreground/70">
                Notes from CA (To be placed in the Proposal)
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const textarea = document.getElementById('para') as HTMLTextAreaElement;
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const text = textarea.value;
                    const before = text.substring(0, start);
                    const selected = text.substring(start, end);
                    const after = text.substring(end);
                    const newValue = `${before}**${selected}**${after}`;
                    onFieldChange("para", newValue);
                    setTimeout(() => {
                      textarea.focus();
                      textarea.setSelectionRange(start + 2, end + 2);
                    }, 0);
                  }}
                  className="p-1.5 hover:bg-accent rounded-md transition-colors text-foreground/70 hover:text-foreground"
                  title="Bold"
                >
                  <Bold size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const textarea = document.getElementById('para') as HTMLTextAreaElement;
                    const start = textarea.selectionStart;
                    const text = textarea.value;
                    const before = text.substring(0, start);
                    const after = text.substring(start);
                    const isNewline = start === 0 || text[start - 1] === '\n';
                    const newValue = `${before}${isNewline ? '' : '\n'}- ${after}`;
                    onFieldChange("para", newValue);
                    setTimeout(() => {
                      textarea.focus();
                      textarea.setSelectionRange(start + (isNewline ? 2 : 3), start + (isNewline ? 2 : 3));
                    }, 0);
                  }}
                  className="p-1.5 hover:bg-accent rounded-md transition-colors text-foreground/70 hover:text-foreground"
                  title="Bullet Point"
                >
                  <List size={16} />
                </button>
              </div>
            </div>
            <textarea
              id="para"
              placeholder="Add notes from the CA (use **text** for bold, - for bullets)"
              value={para}
              onChange={(e) => onFieldChange("para", e.target.value)}
              className="px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all min-h-[96px]"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              Tip: Use <strong>**bold**</strong> for emphasis and <strong>- list</strong> for bullet points.
            </p>
          </div>

          <div className="flex flex-col md:col-span-3">
            <label htmlFor="greeting" className="text-sm font-medium text-foreground/70 mb-2">
              Message (in the final engagement letter just before services section)
            </label>
            <textarea
              id="greeting"
              placeholder="Add a short message for the client"
              value={greeting}
              onChange={(e) => onFieldChange("message", e.target.value)}
              className="px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all min-h-[96px]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};