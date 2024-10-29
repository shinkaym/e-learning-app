/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import Rating from "@/database/rating.model";
import { connectToDatabase } from "../mongoose";
import Course from '@/database/course.model';
import { TCreateRatingParams } from '@/types';
export async function createRating(
  params: TCreateRatingParams
): Promise<boolean | undefined> {
  try {
    connectToDatabase();
    const newRating = await Rating.create(params);
    const findCourse = await Course.findOne({ _id: params.course }).populate({
      path: "rating",
      model: Rating,
    });
    if (findCourse.rating) {
      await findCourse.rating.push(newRating._id);
      await findCourse.save();
    }
    if (!newRating) return false;
    return true;
  } catch (error) {
    console.log(error);
  }
}
export async function getRatingByUserId(
  userId: string
): Promise<boolean | undefined> {
  try {
    connectToDatabase();
    const findRating = await Rating.findOne({ user: userId });
    return findRating?._id ? true : false;
  } catch (error) {
    console.log(error);
  }
}