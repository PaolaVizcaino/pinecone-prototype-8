import Link from "next/link";
import Icon from "../../../../components/Icon";
import { MightyHeader, MightySidebar } from "../../../../components/Mighty";
import Poll from "../../../../components/Poll";
import { module2, budgetPoll } from "../../../../lib/module2";

export const metadata = { title: "What budgeting tool do you currently use? | 2. Budgeting and Money Management" };

// A poll post in the space, opened from the lesson like Mighty does it.
export default function PollPage() {
  return (
    <div className="mn">
      <MightyHeader />
      <div className="mn-body mn-body--dim">
        <MightySidebar current={module2.slug} />
        <main className="mn-main" aria-hidden="true" />
      </div>
      <div className="mn-modal" role="dialog" aria-labelledby="poll-title">
        <div className="mn-modal__bar">
          <span className="mn-space__ico mn-space__ico--sm"><Icon name="list" size={20} /></span>
          <div className="mn-modal__titles"><strong>2. Budgeting and Money Management</strong></div>
          <span className="mn-avatar mn-avatar--sm" />
          <Link href={budgetPoll.back} className="mn-modal__close" aria-label="Close">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </Link>
        </div>
        <div className="mn-feed">
          <div className="mn-feedpost">
            <div className="mn-host">
              <span className="mn-host__avatar"><img src="/host-pinecone.png" alt="" /></span>
              <div><strong>Pinecone by Stanford</strong><small><Icon name="list" size={13} /> 2. Budgeting and Money Management · Posted Oct 5, 2025</small></div>
            </div>
            <h1 id="poll-title" className="sr-only">{budgetPoll.title}</h1>
            <Poll question={budgetPoll.title} options={budgetPoll.options} results={budgetPoll.results} voters={budgetPoll.voters} />
            <div className="mn-feedpost__actions"><span /><span /></div>
            <Link href={budgetPoll.back} className="mn-backlink">← Back to the lesson</Link>
          </div>
          <aside className="mn-comments">
            <h2>Comments</h2>
            <div className="mn-comments__empty"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.1-4.2A8 8 0 1 1 21 12z" /></svg><span>Start the Conversation</span></div>
            <div className="mn-comments__box">Comment</div>
          </aside>
        </div>
      </div>
    </div>
  );
}
