import { getRatings } from '@/lib/actions/rating.action';
import RatingManage from './RatingManage';

const page = async () => {
  const ratings = await getRatings();
  return <RatingManage ratings={ratings}></RatingManage>;
};
export default page;