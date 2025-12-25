import { motion } from "framer-motion";

interface ClientInfoProps {
  clientName: string;
  contactNo: string;
  email: string;
  address: string;
  CIN: string;
  preparedBy: string;
  proposalDate: string;
  greeting: string;
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

          <div className="flex flex-col md:col-span-3">
            <label htmlFor="greeting" className="text-sm font-medium text-foreground/70 mb-2">
              Greeting / Message
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
