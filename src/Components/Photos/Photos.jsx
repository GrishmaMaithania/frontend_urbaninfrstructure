import React, { useMemo } from 'react';
import i11 from '../../Media/interview11.jpg';
import i2 from '../../Media/interview2.jpg';
import i3 from '../../Media/interview3.jpg';
import i4 from '../../Media/interview4.jpg';
import i5 from '../../Media/interview5.jpg';
import i6 from '../../Media/interview6.jpg';
import i7 from '../../Media/interview7.jpg';
import i8 from '../../Media/interview8.jpg';
import i9 from '../../Media/interview9.jpg';
import i10 from '../../Media/interview10.jpg';

function Photos() {
  const images = useMemo(() => [i6, i5, i11, i4, i3, i2, i7, i8, i9, i10], []);
  const textBlocks = useMemo(
    () => [
      'The trains are extremely overcrowded, with many passengers unable to find seats and standing at the doors. This makes the journey uncomfortable and stressful. I suggest adding more coaches to this train or increasing service frequency during peak hours to alleviate congestion.',
      'The restrooms in the station are unclean. I recommend increasing the frequency of cleaning services and ensuring restrooms are checked and maintained more regularly.',
      'Expanding the railway tracks would significantly alleviate the issues of overcrowding. Increased track capacity would allow for more frequent services, reduce overcrowding, and improve overall efficiency.',
      'Theft is a common problem in Mumbai\'s local railway system. Many passengers have reported incidents of theft, including pickpocketing, bag snatching, and mobile phone theft, suggesting that the authorities should take stricter measures to prevent theft and ensure the safety of passengers.',
      'Train accidents in local railway stations cause harm to passengers and disrupt the rail network. The railway authorities should identify patterns and trends in train accidents, prioritize safety measures, and improve the overall safety of the local railway system. Train accidents can have a significant impact on commuters.',
      'Western railways are more frequent than central railways. Sometimes because of delayed trains, passengers become anxious about reaching late to their office, school, college, etc. There can be several reasons for this such as infrastructure problems, weather issues, heavy traffic, technical glitches, and others. It has been observed that the number of late arrival of trains increases during the rainy season, because of drainage and signal issues.',
      'The local railway station provides contaminated or polluted water to the passengers, which makes it unappealing and potentially unhygienic.',
      'Positive feedback on local railway stations is often centered around the affordability and time efficiency. Many customers appreciate the efforts of railway stations and address local service as the lifeline of the city.',
    ],
    []
  );

  return (
    <div className="bg-gray-300 p-12 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Commuters sharing their experiences</h1>
      <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto">
        As part of our initiative to understand the daily challenges faced by commuters, we, the students of Ramnarain Ruia College, conducted interviews with various local commuters from Matunga station, our college, and nearby areas. These interviews provided valuable insights into the experiences of the people who rely on local transportation every day. Here’s a glimpse into those moments and also some of their responses.
      </p>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8 space-y-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="break-inside bg-white rounded-lg shadow-lg overflow-hidden mb-8"
          >
            <img src={src} alt={`Image ${index + 1}`} className="w-full h-auto object-cover" />
            {index < textBlocks.length && (
              <div className="p-6">
                <p className="text-gray-800">{textBlocks[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photos;
