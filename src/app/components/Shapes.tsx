import React from 'react';
import svgPaths from '../../imports/svg-eroniq0woz';

export function ShapeComplexPink({ className }: { className?: string }) {
  return (
    <div className={className} data-name="ShapeComplexPink">
       <div className="h-full overflow-clip relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 711.636 711.636">
          <path d={svgPaths.p50f5d80} fill="#FF0077" />
        </svg>
      </div>
    </div>
  );
}

export function ShapePurple({ className }: { className?: string }) {
  return (
    <div className={className} data-name="ShapePurple">
      <div className="h-full overflow-clip relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 865.683 557.588">
          <path d={svgPaths.p319fd40} fill="#94579E" />
        </svg>
      </div>
    </div>
  );
}

export function ShapeGrey({ className }: { className?: string }) {
  return (
    <div className={className} data-name="ShapeGrey">
      <div className="h-full overflow-clip relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 400">
          <path d={svgPaths.p3b3d9900} fill="#ECEBEB" />
        </svg>
      </div>
    </div>
  );
}

export function ShapePink({ className }: { className?: string }) {
    return (
      <div className={className} data-name="ShapePink">
        <div className="bg-[#E7609F] rounded-full w-full h-full opacity-10" />
      </div>
    );
}
