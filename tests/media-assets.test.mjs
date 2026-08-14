import assert from 'node:assert/strict';
import { getAudioAssetsForLevel, getImageAssetById, getAssetRegistry } from '../modules/media-assets.js';

assert.ok(Array.isArray(getAudioAssetsForLevel('A1')) && getAudioAssetsForLevel('A1').length > 0);
assert.ok(Array.isArray(getAudioAssetsForLevel('A2')) && getAudioAssetsForLevel('A2').length > 0);
assert.ok(Array.isArray(getAudioAssetsForLevel('B1')) && getAudioAssetsForLevel('B1').length > 0);
assert.ok(Array.isArray(getAssetRegistry()) && getAssetRegistry().length > 0);
assert.ok(getImageAssetById('image-hero') !== null);

console.log('media-assets tests passed');
