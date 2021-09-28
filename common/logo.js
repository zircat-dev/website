import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

const PLAIN = '#FFFEEE';
const COLOURS = {
  PLAIN,
  BIG_Z: {
    LAYER_3: 'rgb(209,52,52)',
    LAYER_2: 'rgb(135,52,209)',
    LAYER_1: PLAIN
  },
  TEXT: PLAIN
}

const parentSvgStyle = css`
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 2;
  filter: drop-shadow(7px 5px 6px black);
`

const styleRules = css({
  '& .text': {
    fillRule: 'nonzero',
    fill: COLOURS.TEXT
  },
  '& .big-z': {
    '& .layer-1': {
      fill: COLOURS.BIG_Z.LAYER_1
    },
    '& .layer-2': {
      fill: COLOURS.BIG_Z.LAYER_2
    },
    '& .layer-3': {
      fill: COLOURS.BIG_Z.LAYER_3
    }
  }
})

const Logo = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 459 195" version="1.1" xmlns="http://www.w3.org/2000/svg" className={parentSvgStyle}>
        <g transform="matrix(1,0,0,1,-524.27,-1233.34)">
            <g transform="matrix(0.532325,0,0,0.532325,362.443,1008.17)">
                <g id="zircat-logo--clean" className={styleRules}>
                    <g>
                        <g transform="matrix(1.1837,0,0,1.1837,-166.784,-128.181)" className="lettering" id="zircat-logo__lettering">
                            <g transform="matrix(248.496,0,0,248.496,669,664)">
                                <path d="M0.063,-0.714L0.177,-0.714L0.177,-0.606L0.063,-0.606L0.063,-0.714ZM0.063,-0.517L0.177,-0.517L0.177,-0L0.063,-0L0.063,-0.517Z" className="text text-1" id="zircat-logo__text-1"/>
                            </g>
                            <g transform="matrix(248.496,0,0,248.496,717.954,664)">
                                <path d="M0.06,-0.517L0.167,-0.517L0.167,-0.417L0.169,-0.417C0.172,-0.431 0.179,-0.445 0.189,-0.458C0.198,-0.471 0.21,-0.484 0.224,-0.495C0.237,-0.505 0.252,-0.514 0.269,-0.521C0.286,-0.528 0.303,-0.531 0.32,-0.531C0.333,-0.531 0.343,-0.531 0.348,-0.53C0.353,-0.529 0.358,-0.529 0.363,-0.528L0.363,-0.418C0.355,-0.419 0.347,-0.42 0.339,-0.422C0.33,-0.423 0.322,-0.423 0.314,-0.423C0.295,-0.423 0.277,-0.419 0.26,-0.412C0.243,-0.404 0.228,-0.393 0.215,-0.378C0.202,-0.363 0.192,-0.344 0.185,-0.322C0.178,-0.3 0.174,-0.275 0.174,-0.246L0.174,-0L0.06,-0L0.06,-0.517Z" className="text text-2" id="zircat-logo__text-2"/>
                            </g>
                            <g transform="matrix(248.496,0,0,248.496,796.976,664)">
                                <path d="M0.409,-0.344C0.404,-0.376 0.392,-0.4 0.371,-0.417C0.349,-0.433 0.323,-0.441 0.291,-0.441C0.276,-0.441 0.261,-0.439 0.244,-0.434C0.227,-0.428 0.212,-0.419 0.198,-0.406C0.184,-0.392 0.172,-0.373 0.163,-0.349C0.154,-0.324 0.149,-0.292 0.149,-0.253C0.149,-0.232 0.152,-0.21 0.157,-0.189C0.162,-0.168 0.169,-0.149 0.181,-0.132C0.192,-0.115 0.206,-0.102 0.223,-0.092C0.24,-0.081 0.261,-0.076 0.286,-0.076C0.319,-0.076 0.347,-0.086 0.369,-0.107C0.39,-0.128 0.404,-0.157 0.409,-0.194L0.523,-0.194C0.512,-0.127 0.487,-0.075 0.447,-0.04C0.406,-0.004 0.353,0.014 0.286,0.014C0.245,0.014 0.21,0.007 0.179,-0.007C0.148,-0.02 0.121,-0.039 0.1,-0.063C0.079,-0.086 0.063,-0.114 0.052,-0.147C0.041,-0.18 0.035,-0.215 0.035,-0.253C0.035,-0.292 0.04,-0.328 0.051,-0.362C0.062,-0.396 0.078,-0.426 0.099,-0.451C0.12,-0.475 0.147,-0.495 0.179,-0.51C0.21,-0.524 0.247,-0.531 0.29,-0.531C0.32,-0.531 0.349,-0.527 0.376,-0.52C0.403,-0.512 0.427,-0.5 0.448,-0.485C0.468,-0.47 0.486,-0.45 0.499,-0.427C0.512,-0.404 0.52,-0.376 0.523,-0.344L0.409,-0.344Z" className="text text-3" id="zircat-logo__text-3"/>
                            </g>
                            <g transform="matrix(248.496,0,0,248.496,922.715,664)">
                                <path d="M0.493,-0.115C0.493,-0.101 0.495,-0.091 0.499,-0.085C0.502,-0.079 0.509,-0.076 0.52,-0.076L0.532,-0.076C0.537,-0.076 0.542,-0.077 0.548,-0.078L0.548,0.001C0.544,0.002 0.539,0.004 0.533,0.006C0.526,0.007 0.52,0.009 0.513,0.01C0.506,0.011 0.5,0.012 0.493,0.013C0.486,0.014 0.481,0.014 0.476,0.014C0.453,0.014 0.433,0.009 0.418,-0C0.403,-0.009 0.393,-0.026 0.388,-0.049C0.365,-0.027 0.337,-0.011 0.305,-0.001C0.272,0.009 0.24,0.014 0.209,0.014C0.186,0.014 0.163,0.011 0.142,0.005C0.121,-0.002 0.102,-0.011 0.086,-0.024C0.069,-0.036 0.056,-0.052 0.047,-0.071C0.037,-0.09 0.032,-0.112 0.032,-0.137C0.032,-0.169 0.038,-0.195 0.05,-0.215C0.061,-0.235 0.077,-0.251 0.096,-0.262C0.115,-0.273 0.136,-0.282 0.16,-0.287C0.183,-0.292 0.207,-0.295 0.231,-0.298C0.252,-0.302 0.271,-0.305 0.29,-0.307C0.309,-0.308 0.325,-0.311 0.34,-0.315C0.354,-0.319 0.365,-0.325 0.374,-0.334C0.382,-0.342 0.386,-0.354 0.386,-0.371C0.386,-0.386 0.383,-0.398 0.376,-0.407C0.369,-0.416 0.36,-0.424 0.35,-0.429C0.339,-0.434 0.328,-0.437 0.315,-0.439C0.302,-0.44 0.29,-0.441 0.279,-0.441C0.247,-0.441 0.221,-0.434 0.2,-0.421C0.179,-0.408 0.168,-0.387 0.165,-0.359L0.051,-0.359C0.053,-0.392 0.061,-0.42 0.075,-0.442C0.089,-0.464 0.107,-0.482 0.129,-0.495C0.15,-0.508 0.175,-0.518 0.202,-0.523C0.229,-0.528 0.257,-0.531 0.286,-0.531C0.311,-0.531 0.336,-0.528 0.361,-0.523C0.386,-0.518 0.408,-0.509 0.428,-0.497C0.447,-0.485 0.463,-0.47 0.475,-0.451C0.487,-0.432 0.493,-0.408 0.493,-0.381L0.493,-0.115ZM0.379,-0.259C0.362,-0.248 0.34,-0.241 0.315,-0.239C0.29,-0.236 0.264,-0.233 0.239,-0.228C0.227,-0.226 0.215,-0.223 0.204,-0.22C0.193,-0.216 0.183,-0.211 0.174,-0.205C0.165,-0.198 0.159,-0.19 0.154,-0.18C0.149,-0.169 0.146,-0.157 0.146,-0.142C0.146,-0.129 0.15,-0.119 0.157,-0.11C0.164,-0.101 0.173,-0.094 0.184,-0.09C0.194,-0.085 0.205,-0.081 0.218,-0.079C0.23,-0.077 0.241,-0.076 0.251,-0.076C0.264,-0.076 0.277,-0.078 0.292,-0.081C0.307,-0.084 0.321,-0.09 0.334,-0.098C0.346,-0.106 0.357,-0.116 0.366,-0.129C0.375,-0.141 0.379,-0.156 0.379,-0.174L0.379,-0.259Z" className="text text-4" id="zircat-logo__text-4"/>
                            </g>
                            <g transform="matrix(248.496,0,0,248.496,1048.45,664)">
                                <path d="M0.008,-0.517L0.094,-0.517L0.094,-0.672L0.208,-0.672L0.208,-0.517L0.311,-0.517L0.311,-0.432L0.208,-0.432L0.208,-0.156C0.208,-0.144 0.209,-0.134 0.21,-0.125C0.211,-0.116 0.213,-0.109 0.217,-0.103C0.22,-0.097 0.226,-0.092 0.233,-0.09C0.24,-0.087 0.25,-0.085 0.263,-0.085C0.271,-0.085 0.279,-0.085 0.287,-0.086C0.295,-0.086 0.303,-0.087 0.311,-0.089L0.311,-0.001C0.298,0 0.286,0.002 0.274,0.003C0.262,0.004 0.25,0.005 0.237,0.005C0.207,0.005 0.183,0.002 0.165,-0.004C0.146,-0.009 0.132,-0.018 0.122,-0.029C0.111,-0.04 0.104,-0.053 0.101,-0.07C0.097,-0.087 0.095,-0.106 0.094,-0.127L0.094,-0.432L0.008,-0.432L0.008,-0.517Z" className="text text-5" id="zircat-logo__text-5"/>
                            </g>
                        </g>
                        <g transform="matrix(1.03235,0,0,1.03235,-34.9226,3.34655)" className="big-z">
                            <g transform="matrix(0.921951,-0.0138393,0.0138393,0.921951,20.6004,84.2065)">
                                <path d="M356.211,505.15C428.661,447.666 587.825,387.76 650.711,395.682C664.864,397.465 660.757,451.692 649.735,460.746C542.111,549.157 457.982,624.026 447.37,646.439C505.659,617.333 579.54,589.545 618.567,586.099C650.064,583.318 673.593,590.419 683.062,625.03C691.834,657.093 660.808,735.331 603.324,734.468C588.142,734.24 569.046,705.752 610.824,668.416C605.239,679.179 599.638,691.026 602.728,701.919C605.747,712.559 625.452,705.514 632.154,692.599C639.646,678.159 631.395,655.959 614.223,658.706C566.825,666.287 386.551,737.722 391.733,739.969C372.049,718.546 368.251,696.152 380.7,680.147C415.171,635.832 514.525,537.987 598.556,474.079C523.624,480.105 364.916,564.38 341.928,589.539C309.728,569.971 329.762,532.954 356.211,505.15Z" className="layer-3" id="zircat-logo__big-z__layer-3"/>
                            </g>
                            <g transform="matrix(0.921951,-0.0138393,0.0138393,0.921951,24.6004,69.2065)">
                                <path d="M356.211,505.15C428.661,447.666 587.825,387.76 650.711,395.682C664.864,397.465 660.757,451.692 649.735,460.746C542.111,549.157 457.982,624.026 447.37,646.439C505.659,617.333 579.54,589.545 618.567,586.099C650.064,583.318 673.593,590.419 683.062,625.03C691.834,657.093 660.808,735.331 603.324,734.468C588.142,734.24 569.046,705.752 610.824,668.416C605.239,679.179 599.638,691.026 602.728,701.919C605.747,712.559 625.452,705.514 632.154,692.599C639.646,678.159 631.395,655.959 614.223,658.706C566.825,666.287 386.551,737.722 391.733,739.969C372.049,718.546 368.251,696.152 380.7,680.147C415.171,635.832 514.525,537.987 598.556,474.079C523.624,480.105 364.916,564.38 341.928,589.539C309.728,569.971 329.762,532.954 356.211,505.15Z" className="layer-2" id="zircat-logo__big-z__layer-2"/>
                            </g>
                            <g transform="matrix(0.921951,-0.0138393,0.0138393,0.921951,31.6004,51.2065)">
                                <path d="M356.211,505.15C428.661,447.666 587.825,387.76 650.711,395.682C664.864,397.465 660.757,451.692 649.735,460.746C542.111,549.157 457.982,624.026 447.37,646.439C505.659,617.333 579.54,589.545 618.567,586.099C650.064,583.318 673.593,590.419 683.062,625.03C691.834,657.093 660.808,735.331 603.324,734.468C588.142,734.24 569.046,705.752 610.824,668.416C605.239,679.179 599.638,691.026 602.728,701.919C605.747,712.559 625.452,705.514 632.154,692.599C639.646,678.159 631.395,655.959 614.223,658.706C566.825,666.287 386.551,737.722 391.733,739.969C372.049,718.546 368.251,696.152 380.7,680.147C415.171,635.832 514.525,537.987 598.556,474.079C523.624,480.105 364.916,564.38 341.928,589.539C309.728,569.971 329.762,532.954 356.211,505.15Z" className="layer-1" id="zircat-logo__big-z__layer-1"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  )
}

export default Logo;
