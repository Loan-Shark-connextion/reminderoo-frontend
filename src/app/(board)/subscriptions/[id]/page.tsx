import SubscriptionDetail from '@/components/parts/SubscriptionDetail';

export default function SubscriptionDetailPage() {
  return (
    <>
      <SubscriptionDetail />
      <section className="bg-violet-400 lg:col-span-4">
        <article className="flex flex-col">
          <h1 className="text-3xl">Payment Subscription</h1>
        </article>
      </section>
    </>
  );
}
