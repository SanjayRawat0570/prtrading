import React from 'react';
import Image from 'next/image';
import { Eye, TrendingUp, Play, BadgeCheck } from 'lucide-react';

interface StreamCardProps {
    title: string;
    viewers: string;
    profit: string;
    price?: number;
    isFree?: boolean;
}

const StreamCard: React.FC<StreamCardProps> = ({ title, viewers, profit, price, isFree = false }) => {
    return (
        <article className="bg-transparent w-80 flex-shrink-0">
            <div className="relative aspect-video rounded-xl overflow-hidden group">
                {/* <Image
                    src="https://i.imgur.com/ABz951b.png"
                    alt="Stream thumbnail"
                    layout="fill"
                    objectFit="cover"
                /> */}

                {/* Live Badge */}
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    LIVE
                </div>

                {/* Price Badge */}
                {!isFree && (
                    <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                        ₹{price}
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="p-2 grid grid-cols-[auto_1fr] gap-x-3 mt-2">
                <div className="w-10 h-10 bg-blue-500 rounded-lg row-span-2"></div>

                <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-100 leading-snug">{title}</h3>
                    <div className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-400 px-2 py-0.5 rounded-md text-xs font-medium mt-1.5 self-start">
                        <BadgeCheck size={14} /> Verified
                    </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5">
                        <Eye size={16} /> {viewers}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium text-green-400">
                        <TrendingUp size={16} /> +₹{profit}
                    </span>
                </div>
            </div>

            {/* Pay Button */}
            {!isFree && (
                <button className="w-full mt-3 bg-blue-600 text-white border-none rounded-lg py-3 text-sm font-semibold cursor-pointer flex items-center justify-center gap-2 transition hover:bg-blue-700">
                    <Play size={18} /> Pay ₹{price}
                </button>
            )}
        </article>
    );
};

export default StreamCard;
