/*
 * @Author: Elon Snyder
 * @Date: 2023-02-01 09:46:37
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-02-01 10:01:55
 * @Description:
 * @FilePath: \React\myapp-umi\.umirc.ts
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
});
