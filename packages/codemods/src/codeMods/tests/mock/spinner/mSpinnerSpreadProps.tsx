/* eslint-disable prefer-const */
/* eslint-disable deprecation/deprecation */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Spinner, SpinnerType } from 'office-ui-fabric-react/lib/Spinner';

export const RenderSpinner = (props: any) => {
  const propsTest = { type: SpinnerType.normal, ariaLabel: 'Spinner!' };
  return (
    <div>
      <Spinner {...propsTest} id="d">
        Spinner
      </Spinner>
      {/* include self closing Spinner check */}
      <Spinner {...propsTest} id="d1" />
    </div>
  );
};
/* Render an component awkwardly. */
export const RenderLetSpinner = (props: any) => {
  let propsTest = { type: SpinnerType.normal, ariaLabel: 'Spinner!' };
  const someThing = true;
  return <div>{someThing ? <Spinner {...propsTest} /> : <div />}</div>;
};

const propsForArrow = { type: SpinnerType.normal, ariaLabel: 'Spinner!' };

export const RenderSpinnerPropsArrow = (props: any): any => <Spinner {...propsForArrow} />;
