import { HopprBaseAdProps } from '@hoppr/hopprSdkCommon';
import React from 'react';
export interface BaseAdProps extends HopprBaseAdProps {
    ref?: React.RefObject<unknown>;
    children?: React.ReactNode;
}
