import { ECourseLevel, ECourseStatus } from '@/types/enums';
import { model, models, Schema } from 'mongoose';

export interface ICourse extends Document {
  _id: string;
  title: string;
  image: string;
  intro_url: string;
  desc: string;
  price: number;
  sale_price: number;
  slug: string;
  status: ECourseStatus;
  level: ECourseLevel;
  views: number;
  rating: Schema.Types.ObjectId[];
  info: {
    requirements: string[];
    benefits: string[];
    qa: {
      question: string;
      answer: string;
    }[];
  };
  lectures: Schema.Types.ObjectId[];
  created_at: Date;
  author: Schema.Types.ObjectId;
  _destroy: boolean;
}

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  intro_url: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  sale_price: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: Object.values(ECourseStatus),
    default: ECourseStatus.PENDING,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  lectures: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lecture",
    },
  ],
  rating: {
    type: [Schema.Types.ObjectId],
    ref: "Rating",
  },
  views: {
    type: Number,
    default: 0,
  },
  info: {
    requirements: {
      type: [String],
    },
    benefits: {
      type: [String],
    },
    qa: [
      {
        question: {
          type: String,
        },
        answer: {
          type: String,
        },
      },
    ],
  },
  _destroy: {
    type: Boolean,
    default: false,
  },
  level: {
    type: String,
    enum: Object.values(ECourseLevel),
    default: ECourseLevel.BEGINNER,
  },
});

const Course = models.Course || model<ICourse>("Course", courseSchema);
export default Course;
