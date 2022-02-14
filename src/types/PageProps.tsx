import { VariantLabels, Variants } from 'framer-motion';

export default interface PageProps {
  variants?: Variants;
  initial?: VariantLabels;
  animate?: VariantLabels;
  exit?: VariantLabels;
}
