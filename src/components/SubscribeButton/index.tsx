import { useSession, signIn } from "next-auth/client";
import { stripe } from "../../services/strype";

import styles from "./styles.module.scss";

interface SubscribeNuttonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeNuttonProps) {
  const [session] = useSession();
  function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
