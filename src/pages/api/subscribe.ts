/* eslint-disable import/no-anonymous-default-export */
import {
  NextApiRequest,
  NextApiResponse,
} from "../../../node_modules/next/dist/shared/lib/utils";
import { stripe } from "../../services/strype";
import { getSession } from "next-auth/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { session } = await getSession({ req });

    const stripeCustomer = await stripe.customers.create({
      email: session.user.email,
    });

    const stripeCheckoutSession = await stripe.checkout.session.create({
      customer: stripeCustomer.id,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      line_items: [
        {
          price: "price_1HZ5xOQeYvXbO",
          quantity: 1,
        },
      ],
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: "https://localhost:3000/posts",
      cancel_url: "https://localhost:3000/",
    });

    return res.status(200).json({sessionId: stripeCheckoutSession.id})
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
