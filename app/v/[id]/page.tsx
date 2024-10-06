import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata, ResolvingMetadata } from "next";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import Link from "next/link";
import MessageBox from "@/components/message-box";
import React from "react";
import { SITENAME } from "@/lib/constants";
import SearchCardList from "@/components/search/search-list";
import doodstream from "@/lib/doodstream";

type PageProps = {
    params: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params }: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const data = await doodstream.getFile({ file_code: params.id as string });
     const upstream = await doodstream.getUpstream();
    if (data.status !== 200) {
        return {
            title: data.msg,
            description: "Something went wrong. Please try again later.",
        };
    }

    const file = data.result[0];
    const title = `${file.title} - ${SITENAME}`;
    const description = `${file.title} di ${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma`;
    const image = file.splash_img;
    const previousOgImages = (await parent).openGraph?.images || [];
    const previousTwImages = (await parent).twitter?.images || [];

    return {
        title,
        description,
        twitter: {
            title,
            description,
            images: [...previousTwImages, image],
        },
        openGraph: {
            title,
            description,
            images: [...previousOgImages, image],
            url: `/v/${file.filecode}#${file.title}`,
            type: `article`,
        },
        alternates: {
            canonical: `/v/${file.filecode}#${file.title}`,
        },
    };
}

export default async function Video({ params }: PageProps) {
    const data = await doodstream.getFile({ file_code: params.id as string });
    const upstream = await doodstream.getUpstream();

    if (data.status !== 200) {
        return (
            <MessageBox title={data.msg} countdown={30} variant="error">
                <p className="text-center">
                    Something went wrong. Please try again later.
                </p>
            </MessageBox>
        );
    }

    const file = data.result[0];
const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: `${file.title} - ${SITENAME}`,
        thumbnailUrl: file.splash_img,
        description: `${file.title} di ${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma`,
        url: `https://bokepkost.pages.dev/v/${file.filecode}#${file.title}`,
        embedUrl: `https://${upstream}/e/${file.filecode}`,
        uploadDate: new Date(
            file.uploaded + ".000Z"
        ).toISOString(),
        interactionStatistic: {
            '@type': `InteractionCounter`,
                userInteractionCount: `${file.views}`,
            interactionType: {
                '@type': `WatchAction`,
                target: `https://bokepkost.pages.dev/v/${file.filecode}#${file.title}`
            }  
        }
        }
        const jsonLd2 = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${file.title} - ${SITENAME}`,
        image: file.splash_img,
        description: `${file.title} di ${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma`,
        url: `https://bokepkost.pages.dev/v/${file.filecode}#${file.title}`,
        datePublished: new Date(
            file.uploaded + ".000Z"
        ).toISOString(),
        publisher: {
            '@type': 'Organization',
            name: `${SITENAME}`,
            logo: 'https://bokepkost.pages.dev/favicon.ico'},
            author: {
                '@type': 'Person',
                name: 'admin',
                url: 'https://bokepkost.pages.dev'
              },
        interactionStatistic: {
            '@type': `InteractionCounter`,
                userInteractionCount: `${file.views}`,
            interactionType: {
                '@type': `ReadAction`,
                target: `https://bokepkost.pages.dev/v/${file.filecode}#${file.title}`
            }  
        }
        }
        const jsonLd3 = {
            '@context': 'https://schema.org', 
            '@type': 'Book', 
            'name': `${file.title} - ${SITENAME}`, 
            'aggregateRating': {
            '@type': 'AggregateRating',	
                'ratingValue': '5',	
                'ratingCount': `${file.views}`,	
                'bestRating': '5',	
                'worstRating': '1' }
        }
    return (
        <div className="grid col-span-full gap-4 md:gap-4 md:mx-10">
        <section>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd3) }}
        />
        {/* ... */}
        </section>
            <iframe
                className="w-full h-[30vh] md:h-[55vh] lg:h-[70vh]"
                src={`https://${upstream}/e/${file.filecode}`}
                scrolling="no"
                title={file.title}
                frameBorder={0}
                allowFullScreen={true}
            ></iframe>
            <Card className="mx-2 mb-8">
                <CardHeader>
                    <CardTitle className="text-xl md:text-3xl font-bold">
                        {file.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
         <p>Video bokep indo terbaru viral <a href='https://bokepkost.pages.dev/v/{file.filecode}#{file.title}'>{file.title}</a> di {SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot abg cewek pijat pelajar Hijab Abg Colmek Film Tante Hot Twitter Asia Download Live stw situs indonesia nonton link sd crot playbokep simontok bokepin montok baru perawan anak kecil telegram selingkuh ojol cantik gay vidio lokal artis pelajar janda streaming jepang barat korea japan jav cina japanese china rusia arab india thailand hd anime hentai bokepind gudang avtub pijat sotwe rumah pemerkosaan inggris xpanas pure tobrut vcs ngintip binor remaja yandex update perselingkuhan wiki raja full com porno indoh</p>
                </CardContent>
            </Card>
            <h2 className="text-2xl font-bold text-center my-4">
                Related Video {file.title}
            </h2>
            <SearchCardList query={file.title.split(" ")[2]} />
        </div>
    );
}
