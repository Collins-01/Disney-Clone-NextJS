import type { NextApiRequest, NextApiResponse } from "next";
import MovieListType from "../../../types/MovieList";

const movieList: MovieListType[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption scaleX cdcvfvfbgbgn hn hjmggjkgkiikuikikuikuhk,hkhk.hlk",
    backgroundImg:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Just a subtitle",
    titleImage:
      "https://images.unsplash.com/photo-1665478998855-fface7c926d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "recommend",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption scaleX cdcvfvfbgbgn hn hjmggjkgkiikuikikuikuhk,hkhk.hlk",
    backgroundImg:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Just a subtitle",
    titleImage:
      "https://images.unsplash.com/photo-1665478998855-fface7c926d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "original",
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption scaleX cdcvfvfbgbgn hn hjmggjkgkiikuikikuikuhk,hkhk.hlk",
    backgroundImg:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Just a subtitle",
    titleImage:
      "https://images.unsplash.com/photo-1665478998855-fface7c926d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "trending",
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption scaleX cdcvfvfbgbgn hn hjmggjkgkiikuikikuikuhk,hkhk.hlk",
    backgroundImg:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Just a subtitle",
    titleImage:
      "https://images.unsplash.com/photo-1665478998855-fface7c926d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "Action",
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption scaleX cdcvfvfbgbgn hn hjmggjkgkiikuikikuikuhk,hkhk.hlk",
    backgroundImg:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Just a subtitle",
    titleImage:
      "https://images.unsplash.com/photo-1665478998855-fface7c926d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "Action",
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption scaleX cdcvfvfbgbgn hn hjmggjkgkiikuikikuikuhk,hkhk.hlk",
    backgroundImg:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Just a subtitle",
    titleImage:
      "https://images.unsplash.com/photo-1665478998855-fface7c926d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "for you",
  },
  {
    id: 7,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption scaleX cdcvfvfbgbgn hn hjmggjkgkiikuikikuikuhk,hkhk.hlk",
    backgroundImg:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Just a subtitle",
    titleImage:
      "https://images.unsplash.com/photo-1665478998855-fface7c926d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "Action",
  },
  {
    id: 8,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption scaleX cdcvfvfbgbgn hn hjmggjkgkiikuikikuikuhk,hkhk.hlk",
    backgroundImg:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Just a subtitle",
    titleImage:
      "https://images.unsplash.com/photo-1665478998855-fface7c926d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "Action",
  },
  {
    id: 9,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption scaleX cdcvfvfbgbgn hn hjmggjkgkiikuikikuikuhk,hkhk.hlk",
    backgroundImg:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Just a subtitle",
    titleImage:
      "https://images.unsplash.com/photo-1665478998855-fface7c926d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "Action",
  },
  {
    id: 10,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption scaleX cdcvfvfbgbgn hn hjmggjkgkiikuikikuikuhk,hkhk.hlk",
    backgroundImg:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Just a subtitle",
    titleImage:
      "https://images.unsplash.com/photo-1665478998855-fface7c926d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "Action",
  },
  {
    id: 11,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption scaleX cdcvfvfbgbgn hn hjmggjkgkiikuikikuikuhk,hkhk.hlk",
    backgroundImg:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Just a subtitle",
    titleImage:
      "https://images.unsplash.com/photo-1665478998855-fface7c926d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "Action",
  },
  {
    id: 12,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption scaleX cdcvfvfbgbgn hn hjmggjkgkiikuikikuikuhk,hkhk.hlk",
    backgroundImg:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Just a subtitle",
    titleImage:
      "https://images.unsplash.com/photo-1665478998855-fface7c926d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "Action",
  },
  {
    id: 13,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption scaleX cdcvfvfbgbgn hn hjmggjkgkiikuikikuikuhk,hkhk.hlk",
    backgroundImg:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Just a subtitle",
    titleImage:
      "https://images.unsplash.com/photo-1665478998855-fface7c926d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "Action",
  },
  {
    id: 14,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption scaleX cdcvfvfbgbgn hn hjmggjkgkiikuikikuikuhk,hkhk.hlk",
    backgroundImg:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Just a subtitle",
    titleImage:
      "https://images.unsplash.com/photo-1665478998855-fface7c926d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "Action",
  },
  {
    id: 15,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption scaleX cdcvfvfbgbgn hn hjmggjkgkiikuikikuikuhk,hkhk.hlk",
    backgroundImg:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cardImg:
      "https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Just a subtitle",
    titleImage:
      "https://images.unsplash.com/photo-1665478998855-fface7c926d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "Action",
  },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(movieList);
}
