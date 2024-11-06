/**
 @author : Caven Chen
 **/

import * as CesiumLib from '@cesium/engine'

import Supercluster from 'supercluster'

const Cesium = window.Cesium || CesiumLib

const ENGINE_VERSION = window.CESIUM_VERSION || '12.0.0'

export { Cesium, Supercluster, ENGINE_VERSION }
