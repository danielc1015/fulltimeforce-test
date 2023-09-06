import React from 'react'

interface TagProps {
    text: string;
    color: string;
}

export function Tag({text, color}: TagProps) {
    return (
        <span className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-${color}-900 text-white`}>{text}</span>
    )

}
