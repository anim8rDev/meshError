export function Logger(logText) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('---> ' + logText);
    }
  }
  
  export function ScaleRange(num, in_min, in_max, out_min, out_max) {
    if (num < in_min) return out_min;
    if (num > in_max) return out_max;
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }
  
  
  