import styles from "./styles.module.scss";

interface SubscribeNuttonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeNuttonProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
