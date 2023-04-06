import { getGooglePlaceReviewsById, getIndoorsByID, getYoutubeVideosById } from '@/api-service/indoor-api';
import { Icons } from '@/components/icons';
import LargeHeading from '@/components/ui/large-heading';
import Page from '@/components/ui/page';
import { IndoorDataItemInterface } from '@/types/nav';
import Link from 'next/link';
import Image from 'next/image';
import { CustomMap } from '@/components/ui/google-map';
import YouTubeFrame from '@/components/ui/youtube-framer';

interface IndoorTubePageProps {
  params: {
    country: string,
    city: string,
    tubeId: number,
  };
}

const mockYoutubeData = {
  "kind": "youtube#searchListResponse",
  "etag": "sUdMqtW-IxNiU43gwhIgDINfmA8",
  "nextPageToken": "CAoQAA",
  "regionCode": "UA",
  "pageInfo": {
      "totalResults": 105,
      "resultsPerPage": 10
  },
  "items": [
      {
          "kind": "youtube#searchResult",
          "etag": "1Az_9AEaUMcx0t1wU3ZZqsnbwcc",
          "id": {
              "kind": "youtube#video",
              "videoId": "MBjNl4pcsqU"
          },
          "snippet": {
              "publishedAt": "2018-10-25T11:39:17Z",
              "channelId": "UCB0C5OTKS3_KDFT38SP-1Cw",
              "title": "Spełnij marzenia o lataniu - Tunel Aerodynamiczny Flyspot - Atrakcja dla całej rodziny!",
              "description": "Spełnij marzenia o lataniu w najlepszych tunelach aerodynamicznych świata! Czekamy na Ciebie w Warszawie, Katowicach i w ...",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/MBjNl4pcsqU/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/MBjNl4pcsqU/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/MBjNl4pcsqU/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  }
              },
              "channelTitle": "Flyspot - Indoor Skydiving - Tunel Aerodynamiczny",
              "liveBroadcastContent": "none",
              "publishTime": "2018-10-25T11:39:17Z"
          }
      },
      {
          "kind": "youtube#searchResult",
          "etag": "z-9XkF9du-WuQRlyjMFUofoI_Tk",
          "id": {
              "kind": "youtube#video",
              "videoId": "bSJlRWYSfXU"
          },
          "snippet": {
              "publishedAt": "2020-06-04T09:55:17Z",
              "channelId": "UCB0C5OTKS3_KDFT38SP-1Cw",
              "title": "Flyspot.Spełnij marzenia o lataniu!",
              "description": "Spełnij marzenia o lataniu w najlepszych tunelach aerodynamicznych świata! Czekamy na Ciebie w Warszawie, Katowicach i ...",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/bSJlRWYSfXU/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/bSJlRWYSfXU/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/bSJlRWYSfXU/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  }
              },
              "channelTitle": "Flyspot - Indoor Skydiving - Tunel Aerodynamiczny",
              "liveBroadcastContent": "none",
              "publishTime": "2020-06-04T09:55:17Z"
          }
      },
      {
          "kind": "youtube#searchResult",
          "etag": "u36PNTi3t-rpDFNhdEAV_Id_iYk",
          "id": {
              "kind": "youtube#video",
              "videoId": "JXVhQJXkfCM"
          },
          "snippet": {
              "publishedAt": "2019-05-08T13:23:31Z",
              "channelId": "UCB0C5OTKS3_KDFT38SP-1Cw",
              "title": "Flyspot All Inclusive package",
              "description": "Flyspot All Inclusive - holidays for everyone! For more information visit our website www.flyspot.com or message us: ...",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/JXVhQJXkfCM/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/JXVhQJXkfCM/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/JXVhQJXkfCM/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  }
              },
              "channelTitle": "Flyspot - Indoor Skydiving - Tunel Aerodynamiczny",
              "liveBroadcastContent": "none",
              "publishTime": "2019-05-08T13:23:31Z"
          }
      },
      {
          "kind": "youtube#searchResult",
          "etag": "-OKBLyHlewfxq90Dtk1S_H0mZ74",
          "id": {
              "kind": "youtube#video",
              "videoId": "fG_wCp2J9Pk"
          },
          "snippet": {
              "publishedAt": "2016-10-28T09:11:49Z",
              "channelId": "UCB0C5OTKS3_KDFT38SP-1Cw",
              "title": "Symulator Boeing 737NG we Flyspot Warszawa",
              "description": "Idelanie odwzorowany kokpit. Najlepsza grafika 4K. Dostępny dla każdego, pełnowymiarowy symulator samolotu pasażerskiego ...",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/fG_wCp2J9Pk/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/fG_wCp2J9Pk/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/fG_wCp2J9Pk/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  }
              },
              "channelTitle": "Flyspot - Indoor Skydiving - Tunel Aerodynamiczny",
              "liveBroadcastContent": "none",
              "publishTime": "2016-10-28T09:11:49Z"
          }
      },
      {
          "kind": "youtube#searchResult",
          "etag": "cs-OXaxRHeuy-dopG0m8CmIfg7U",
          "id": {
              "kind": "youtube#video",
              "videoId": "MJHKT35d65s"
          },
          "snippet": {
              "publishedAt": "2021-11-25T11:23:34Z",
              "channelId": "UCB0C5OTKS3_KDFT38SP-1Cw",
              "title": "Wyjątkowy prezent dla każdego - lot w tunelu aerodynamicznym!",
              "description": "Latanie we Flyspot to zabawa dla całej rodziny! https://sklep.flyspot.com/produkty/vouchery/prezent-swiateczny Szukasz ...",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/MJHKT35d65s/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/MJHKT35d65s/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/MJHKT35d65s/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  }
              },
              "channelTitle": "Flyspot - Indoor Skydiving - Tunel Aerodynamiczny",
              "liveBroadcastContent": "none",
              "publishTime": "2021-11-25T11:23:34Z"
          }
      },
      {
          "kind": "youtube#searchResult",
          "etag": "pV2elXpb_W-Z420D70YohWKSYzE",
          "id": {
              "kind": "youtube#video",
              "videoId": "ZMBYU7VKTRg"
          },
          "snippet": {
              "publishedAt": "2015-07-10T11:39:09Z",
              "channelId": "UCB0C5OTKS3_KDFT38SP-1Cw",
              "title": "Flyspot - sezon 2015",
              "description": "",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/ZMBYU7VKTRg/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/ZMBYU7VKTRg/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/ZMBYU7VKTRg/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  }
              },
              "channelTitle": "Flyspot - Indoor Skydiving - Tunel Aerodynamiczny",
              "liveBroadcastContent": "none",
              "publishTime": "2015-07-10T11:39:09Z"
          }
      },
      {
          "kind": "youtube#searchResult",
          "etag": "TMLH-2roG9Nj1yfkWprQnWQgQmM",
          "id": {
              "kind": "youtube#video",
              "videoId": "c_jioNF4Wg8"
          },
          "snippet": {
              "publishedAt": "2016-03-07T15:20:25Z",
              "channelId": "UCB0C5OTKS3_KDFT38SP-1Cw",
              "title": "Maja Kuczyńska - Mistrzyni Świata we Freestyle w Indoor Skydivingu",
              "description": "Maja Kuczyńska -opowiada o sobie, swojej pasji, o lataniu. Video by https://www.lauriaapro.com.",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/c_jioNF4Wg8/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/c_jioNF4Wg8/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/c_jioNF4Wg8/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  }
              },
              "channelTitle": "Flyspot - Indoor Skydiving - Tunel Aerodynamiczny",
              "liveBroadcastContent": "none",
              "publishTime": "2016-03-07T15:20:25Z"
          }
      },
      {
          "kind": "youtube#searchResult",
          "etag": "I7zvGggETZTwTpcJHF7XBJRibkg",
          "id": {
              "kind": "youtube#video",
              "videoId": "gUbBDn1wo3k"
          },
          "snippet": {
              "publishedAt": "2022-09-12T09:15:43Z",
              "channelId": "UCB0C5OTKS3_KDFT38SP-1Cw",
              "title": "Pomysł na wakacje - Flyspot",
              "description": "Zapraszamy na latanie do Flyspot! Kup voucher: https://sklep.flyspot.com/",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/gUbBDn1wo3k/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/gUbBDn1wo3k/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/gUbBDn1wo3k/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  }
              },
              "channelTitle": "Flyspot - Indoor Skydiving - Tunel Aerodynamiczny",
              "liveBroadcastContent": "none",
              "publishTime": "2022-09-12T09:15:43Z"
          }
      },
      {
          "kind": "youtube#searchResult",
          "etag": "_qJUfFDGld7x8ebSbwhvH8u_xt8",
          "id": {
              "kind": "youtube#video",
              "videoId": "Fu8d2_bwe70"
          },
          "snippet": {
              "publishedAt": "2014-09-25T14:06:52Z",
              "channelId": "UCB0C5OTKS3_KDFT38SP-1Cw",
              "title": "Spełnij marzenia o lataniu w tunelu aerodynamicznym Flyspot",
              "description": "Czy kiedykolwiek marzyłeś o lataniu? Flyspot to miejsce, w którym możesz spełnić swoje marzenia! https://www.flyspot.com/pl/ ...",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/Fu8d2_bwe70/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/Fu8d2_bwe70/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/Fu8d2_bwe70/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  }
              },
              "channelTitle": "Flyspot - Indoor Skydiving - Tunel Aerodynamiczny",
              "liveBroadcastContent": "none",
              "publishTime": "2014-09-25T14:06:52Z"
          }
      },
      {
          "kind": "youtube#searchResult",
          "etag": "MYDivyUkhMj4Udd58RydtSecj0Y",
          "id": {
              "kind": "youtube#video",
              "videoId": "8c27sE5mXLg"
          },
          "snippet": {
              "publishedAt": "2014-03-03T15:47:07Z",
              "channelId": "UCB0C5OTKS3_KDFT38SP-1Cw",
              "title": "Flyspot - pierwszy tunel aerodynamiczny w Polsce powstał w Warszawie",
              "description": "Czy kiedykolwiek marzyłeś o lataniu? Flyspot to miejsce dla Ciebie! Odwiedź nas - spełnimy Twoje marzenie. Pierwszy polski ...",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/8c27sE5mXLg/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/8c27sE5mXLg/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/8c27sE5mXLg/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  }
              },
              "channelTitle": "Flyspot - Indoor Skydiving - Tunel Aerodynamiczny",
              "liveBroadcastContent": "none",
              "publishTime": "2014-03-03T15:47:07Z"
          }
      }
  ]
}

const googlePlacesMockData = {
  "html_attributions": [],
  "result": {
      "reviews": [
          {
              "author_name": "Europe Explorer",
              "author_url": "https://www.google.com/maps/contrib/110765854200808550924/reviews",
              "language": "en",
              "original_language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a-/ACB-R5Sxh-AlJCVywFaS1ZlpqgZ3yrLHak53Mm2bfC4PMg=s128-c0x00000000-cc-rp-mo-ba5",
              "rating": 5,
              "relative_time_description": "2 months ago",
              "text": "Get your wings and fly indoor with Flyspot who offer training before takeoff and speaks fluent English , polish and have huge free parking space",
              "time": 1673761287,
              "translated": false
          },
          {
              "author_name": "Martha A",
              "author_url": "https://www.google.com/maps/contrib/101261224838889611961/reviews",
              "language": "en",
              "original_language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a-/ACB-R5SRC8FWdYUsuC7IsuGsDp1d2aQtfUSoFsGMOpTQ6zU=s128-c0x00000000-cc-rp-mo",
              "rating": 5,
              "relative_time_description": "2 months ago",
              "text": "I maybe wrong but I felt a very cold vibe (can’t get it out of my head) from the receptionist but in all, my instructor was super duper amazing and the experience itself was very lovely. I’ll come again if I ever come to Poland. Thanks Flyspot….",
              "time": 1675388024,
              "translated": false
          },
          {
              "author_name": "Edgar",
              "author_url": "https://www.google.com/maps/contrib/111606245649447682228/reviews",
              "language": "en",
              "original_language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a-/ACB-R5Rmzj7a1Xz99C_M17I5hdXQpScoANpbatx64EUl6ZM=s128-c0x00000000-cc-rp-mo-ba3",
              "rating": 5,
              "relative_time_description": "2 months ago",
              "text": "Amazing opportunity to practice your flying skills or just for fun",
              "time": 1675158656,
              "translated": false
          },
          {
              "author_name": "Dolapo K",
              "author_url": "https://www.google.com/maps/contrib/113413411988954075910/reviews",
              "language": "en",
              "original_language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a-/ACB-R5SAMJwQINwLOrgCDCSZE0IQd9-ru8LKP8BB8UtNNw=s128-c0x00000000-cc-rp-mo-ba5",
              "rating": 5,
              "relative_time_description": "a year ago",
              "text": "Very nice experience. Highly recommend for all. The instructor was kind and nice to the kids. Great experience for all those planing to do skydiving. Just that I would recommend full facial helmet for all",
              "time": 1622049420,
              "translated": false
          },
          {
              "author_name": "DriveR13G2 7",
              "author_url": "https://www.google.com/maps/contrib/109114217236512508113/reviews",
              "language": "en",
              "original_language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a/AGNmyxZdiYxjosUiBUuqJikLddYqSgRBk5PNk3LyPkZU=s128-c0x00000000-cc-rp-mo-ba3",
              "rating": 5,
              "relative_time_description": "5 months ago",
              "text": "Much learning/preparation in little time at least for me as a newbie, but the instructor and receptionist are very patient / answer everything. If you go by foot from Poznanska street, it's not the first crossing, where the parking lots for the neighboring hotel are, but one crossing further, then there are arrows from there to guide you. The edited video is a nice memory, available fast via email download link from a cloud hoster. It's a completely safe experience and can be a lot of fun",
              "time": 1666601822,
              "translated": false
          }
      ]
  },
  "status": "OK"
}

const IndoorTubePage = async ({
  params: { country, city, tubeId },
}: IndoorTubePageProps) => {
  const indoorsList : IndoorDataItemInterface[] = await getIndoorsByID(country, city, tubeId);
  const youtubeChannelId = indoorsList[0].socialMedia?.youtubeChannelId;
  const googlePlaceId = indoorsList[0].socialMedia?.googlePlaceId;
  const youTubeData = await getYoutubeVideosById(youtubeChannelId);
  const googlePlacesReviews = await getGooglePlaceReviewsById(googlePlaceId)
  console.log(googlePlacesReviews, "googlePlacesReviews")
  console.log(youTubeData, "youTubeData")

  return (
    <Page>
      {indoorsList &&
        indoorsList.map((item: IndoorDataItemInterface) => (
          <div className='flex flex-col gap-14 w-full' key={item.id}>
          <section className='relative w-full flex flex-col gap-10' >
            <Image
              src={item.coverImage?.url}
              alt={item.coverImage?.alternativeText}
              width={item.coverImage?.width}
              height={item.coverImage?.height}
              className="w-full h-[600px] object-cover"
              priority
              quality={100}
            />
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-10 '>
                <div className='relative w-56 h-56 flex items-center shadow-lg border-radius-50'>
                  <Image
                    src={item.logo?.url}
                    alt={item.logo?.alternativeText}
                    width={item.logo?.width}
                    height={item.logo?.height}
                    className="w-full border-radius-50"
                    priority
                  />
                </div>
                <div className='flex flex-col gap-5'>
                  <LargeHeading size="lg">{item.title}</LargeHeading>
                  <div className='flex items-center gap-3'>
                    <Icons.mapPin className="h-5 w-5" />
                    <span>{item.indoorLocation.country}, {item.indoorLocation.city}, {item.indoorLocation.zipcode}, {item.indoorLocation.address}</span>
                  </div>
                </div>
              </div>
              <Link
                target="_blank"
                href={item.websiteUrl}
                className="h-20 w-24 bg-slate-800 text-white rounded-lg flex text-center items-center"
              >
                Go to website
              </Link>
            </div>
          </section>
          <section className='flex gap-20 mt-5'>
            <div className='flex basis-1/2 gap-10 flex-col '>
              <div className='flex justify-between gap-5'>
                <div className='flex gap-4'>
                  {item.socialMedia?.list?.map(({id, link, type}) => (
                    <Link href={link} key={id} target="_blank">
                      {type === 'Instagram' && <Icons.instagram className="h-9 w-9" />}
                      {type === 'Facebook' && <Icons.facebook className="h-9 w-9" />}
                      {type === 'YouTube' && <Icons.youtube className="h-9 w-9" />}
                      {type === 'Twitter' && <Icons.twitter className="h-9 w-9" />}
                    </Link>
                  ))}
                </div>
                <div>
                  {item.isStillBuilding ? 
                    <div className='flex items-center gap-2'>
                      <div className='w-10 h-10 bg-yellow-400 border-radius-50'></div>
                      <span>It is still building. The openning is soon!</span>
                    </div> :
                    <div className='flex items-center gap-2'>
                      <div className='w-10 h-10 bg-green-400 border-radius-50'></div>
                      <span>It is already opened!</span>
                    </div> 
                    
                  }
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <LargeHeading size="sm">About indoor</LargeHeading>
                <p>{item.description}</p>
              </div>
              <div className='flex flex-col gap-5'>
                <LargeHeading size="sm">Working hours</LargeHeading>
                <div>
                  {item.workingHours.map(({id, day, hours}) => (
                    <div className='flex justify-between' key={id}>
                      <span>{day?.map((item) => `${item}, `)}</span>
                      <span className='font-semibold'>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <LargeHeading size="sm">Available facilities</LargeHeading>
                <p>{item.facilities}</p>
              </div>
            </div>
            <div className='flex basis-1/2'>
              <div className='flex w-full flex-col gap-5'>
                <LargeHeading size="sm">Indoor technical characteristics</LargeHeading>
                <table className='border-2 border-black dark:border-white'>
                  <thead>
                    <tr>
                      <th>Characteristic name</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Diameter</td>
                      <td>{item.diameter}</td>
                    </tr>
                    <tr>
                      <td>Speed</td>
                      <td>{item.speed}</td>
                    </tr>
                    <tr>
                      <td>Height</td>
                      <td>{item.height}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section className='grid grid-cols-3 gap-4'>
            {youTubeData && youTubeData.items?.map((youTubeDataItem: any) => (
              <YouTubeFrame
                key={`video-${youTubeDataItem.id.videoId}`}
                video={youTubeDataItem.id.videoId}
                width={"100%"}
                height={"100%"}
                thumbnailQuality={"hqdefault"}
                thumbnailClassName="h-full"
              />
            ))}
          </section>
          <section className='flex gap-20'>
            <div className='bg-slate-400 flex flex-col gap-5 basis-1/2 p-6 rounded-lg'>
              <div className='flex justify-between items-center w-full'>
                <LargeHeading size="sm">Find us on the map</LargeHeading>
                <Icons.map className="h-5 w-5" />
              </div>
              <CustomMap lat={item.indoorLocation.lat} long={item.indoorLocation.long} />
            </div>
            <div className='flex basis-1/2'></div>
          </section>
          <section className='grid grid-cols-3 gap-4'>
            {googlePlacesReviews && googlePlacesReviews.result?.reviews.map((review : any) => (
              <div 
                key={`review-${review.time}`}
                className='w-72 p-5 shadow-lg rounded-xl'
              >
                <Image
                  src={review.profile_photo_url}
                  alt="avatar"
                  width={20}
                  height={20}
                  className="border-radius-50"
                />
                <p>{review.relative_time_description}</p>
                <p>{review.author_name}</p>
                <p>{review.text}</p>
                <p>Rating - {review.rating}</p>
              </div>
            ))}
          </section>
        </div>
        ))}
    </Page>
  );
};

export default IndoorTubePage;
