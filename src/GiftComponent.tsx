import React from 'react';
import { ContentType, EnvoyShareComponent, EnvoyToolkitCore } from 'envoy-toolkit-react';
import spinner from './images/tail-spin.svg';
import giftIcon from './images/gift.svg';
import share from './images/share.svg';

const apiKey =
  'Illrz4eJw01mHAgiHKA4m1gVdxD7li3b3bSpkJyw';

EnvoyToolkitCore.init({
  apiKey,
  sandbox: true
});

const GiftComponent = () => {
  return (
    <div className='flex gap-2 mt-2'>
      <EnvoyShareComponent
        config={{
          userId: 'some-user-id',
          contentConfig: {
            contentType: ContentType.Video,
            contentId: 'some-content-id',
            contentName: 'Ancient greek history',
            contentDescription:
              'Roughly three centuries after the Late Bronze Age collapse of Mycenaean Greece, Greek urban poleis began to form in the 8th century BC, ushering in the Archaic period and colonization of the Mediterranean Basin.',
            common: {
              media: {
                poster: 'https://dev-envoy-assets.s3.eu-west-2.amazonaws.com/uploads/fideos-poster.png',
                source:
                  'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd'
              }
            }
          }
        }}
      >
        {(share) =>
          share.isLoading ? (
            <img className='w-5 h-5 m-1 cursor-pointer' src={spinner} alt='gift' />
          ) : (
            <img onClick={share.onClick} className='w-6 h-6 cursor-pointer' src={giftIcon} alt='gift' />
          )
        }
      </EnvoyShareComponent>
      <img className='w-6 h-6 cursor-pointer' src={share} alt='gift' />
    </div>
  );
};

export default GiftComponent;
