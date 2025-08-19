import path from 'path';

const phaserModule = path.join(process.cwd(), '/node_modules/phaser-ce/build/custom');
const phaser = path.join(phaserModule, 'phaser-split.js');
const pixi = path.join(phaserModule, 'pixi.js');
const p2 = path.join(phaserModule, 'p2.js');

/** @type {import('webpack').Configuration} */
export default {
  target: ['web'],
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'renjs.mjs',
    clean: true,
    library: {
      type: 'module'
    }
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      { test: /\.ts?$/, loader: 'ts-loader', exclude: /node_modules/ },
      { test: /pixi\.js/, loader: 'expose-loader', options: { exposes: ['PIXI'] } },
      { test: /phaser-split\.js$/, loader: 'expose-loader', options: { exposes: ['Phaser'] } },
      { test: /p2\.js/, loader: 'expose-loader', options: { exposes: ['p2'] } }            
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      'pixi': pixi,
      'p2': p2,
      'phaser-ce': phaser
    }
  }
};
