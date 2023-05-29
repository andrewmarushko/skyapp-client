'use client'

import Script from "next/script";

const SocialNews = ({ label = ''}: {label: string}) => {
    return (
        <div>
             <Script
              src="https://connect.facebook.net/en_US/sdk.js"
              strategy="lazyOnload"
            />
            <Script
              strategy="lazyOnload"
              src="https://platform.twitter.com/widgets.js"
            />
            Latest news
          <div className="flex gap-4">
            <div>
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${label}&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                width="340"
                height="500"
                style={{ border: 'none', overflow: 'hidden' }}
                allowFullScreen
                allow={
                  'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
                }
              ></iframe>
            </div>
            <div className="w-full">
              <a
                download={<div>...loading....</div>}
                className="twitter-timeline"
                data-lang="en"
                data-height="500"
                data-theme="dark"
                href={`https://twitter.com/${label}?ref_src=twsrc%5Etfw`}
              >
                Tweets by {label}
              </a>
            </div>
          </div>
        </div>
    );
}

export default SocialNews;