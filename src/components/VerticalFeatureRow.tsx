import { ReactNode } from 'react';

import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full md:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
        {props.children}
      </div>

      <div className="w-full md:w-1/2 p-6">
        <img
          className="rounded-2xl mx-auto"
          src={`${router.basePath + props.image}`}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
