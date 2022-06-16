import React from "react";
import ReactMarkdown from "react-markdown";

export interface IMarkdownProps {
    content: string;
}
export const Markdown: React.FC<IMarkdownProps> = ({ content }) => {
    return <ReactMarkdown>{content}</ReactMarkdown>;
};
