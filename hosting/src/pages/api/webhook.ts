// Webhook response received from The Next Leg
// {
//   "createdAt": {
//       "_nanoseconds": 215000000,
//       "_seconds": 1678840347
//   },
//   "buttons": [
//       "U1",
//       "U2",
//       "U3",
//       "U4",
//       "🔄",
//       "V1",
//       "V2",
//       "V3",
//       "V4"
//   ],
//   "imageUrl": "your-image-url",
//   "buttonMessageId": "OtfxNzfMIKBPVE1aP4u4",
//   "originatingMessageId": "your-message-id",
//   "content": "your-original-prompt"
// }
import { firestore } from '../../db';
import { addDoc, collection } from 'firebase/firestore';

export default async function handler(req: any, res: any) {
  const { imageUrl } = req.body as any;
  console.log(req.body);

  await addDoc(collection(firestore, 'imgs'), {
    imgUrl: imageUrl,
    createdAt: new Date(), // serverTimestamp() -> Not all clients will have the same time
  });

  res.status(200).json({ name: 'John Doe' });
}
