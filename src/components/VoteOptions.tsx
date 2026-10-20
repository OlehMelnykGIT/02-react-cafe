import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (type: 'good' | 'neutral' | 'bad') => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptionsProps({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote('bad')}>
        Bad
      </button>
      <button
        className={`${css.button} ${css.reset}`}
        onClick={onReset}
        disabled={!canReset}
      >
        Reset
      </button>
    </div>
  );
}
