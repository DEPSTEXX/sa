// src/constants/masks.ts
interface RawMask {
  prefix: string;
  mask: string;
}

interface MaskOption {
  label: string;
  value: string;
}

const RAW_MASKS: RawMask[] = [
  { prefix: '0', mask: '0.0.0.0' },
  { prefix: '1', mask: '128.0.0.0' },
  { prefix: '2', mask: '192.0.0.0' },
  { prefix: '3', mask: '224.0.0.0' },
  { prefix: '4', mask: '240.0.0.0' },
  { prefix: '5', mask: '248.0.0.0' },
  { prefix: '6', mask: '252.0.0.0' },
  { prefix: '7', mask: '254.0.0.0' },
  { prefix: '8', mask: '255.0.0.0' },
  { prefix: '9', mask: '255.128.0.0' },
  { prefix: '10', mask: '255.192.0.0' },
  { prefix: '11', mask: '255.224.0.0' },
  { prefix: '12', mask: '255.240.0.0' },
  { prefix: '13', mask: '255.248.0.0' },
  { prefix: '14', mask: '255.252.0.0' },
  { prefix: '15', mask: '255.254.0.0' },
  { prefix: '16', mask: '255.255.0.0' },
  { prefix: '17', mask: '255.255.128.0' },
  { prefix: '18', mask: '255.255.192.0' },
  { prefix: '19', mask: '255.255.224.0' },
  { prefix: '20', mask: '255.255.240.0' },
  { prefix: '21', mask: '255.255.248.0' },
  { prefix: '22', mask: '255.255.252.0' },
  { prefix: '23', mask: '255.255.254.0' },
  { prefix: '24', mask: '255.255.255.0' },
  { prefix: '25', mask: '255.255.255.128' },
  { prefix: '26', mask: '255.255.255.192' },
  { prefix: '27', mask: '255.255.255.224' },
  { prefix: '28', mask: '255.255.255.240' },
  { prefix: '29', mask: '255.255.255.248' },
  { prefix: '30', mask: '255.255.255.252' },
  { prefix: '31', mask: '255.255.255.254' },
  { prefix: '32', mask: '255.255.255.255' },
];

export const MASK_OPTIONS: MaskOption[] = RAW_MASKS.map(item => ({
  label: `${item.prefix}/${item.mask}`,
  value: item.mask,
}));