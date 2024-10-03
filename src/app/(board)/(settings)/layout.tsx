export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:col-span-12">
      <h6 className="font-semibold text-primary-80 text-heading-6 mb-4">My Profile</h6>
      <section className="bg-primary-0 gap-8 px-2 py-4 rounded-lg lg:grid lg:grid-cols-12 md:p-9">{children}</section>
    </div>
  );
}
