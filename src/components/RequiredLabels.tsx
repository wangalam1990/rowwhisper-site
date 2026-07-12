import { Shield, Users, Lock } from "lucide-react";

export default function RequiredLabels() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-4 text-sm">
      <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full">
        <Shield className="w-4 h-4" />
        <span>18+ Only</span>
      </div>
      <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-3 py-1 rounded-full">
        <Users className="w-4 h-4" />
        <span>No Stranger Matching</span>
      </div>
      <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
        <Lock className="w-4 h-4" />
        <span>Private Office Chat Only</span>
      </div>
    </div>
  );
}
