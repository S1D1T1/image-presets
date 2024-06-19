{
  "Lightning Basic": {
    "guidance_scale": 1.5,
    "sampler": "DPM++ SDE Karras",
    "steps": 5
  },
  "Turbo Basic": {
    "guidance_scale": 1,
    "sampler": "DPM++ SDE Karras",
    "steps": 6
  },
  "Chronos": {
    "guidance_scale": 7,
    "model": "chronos_v10",
    "sampler": "Euler a",
    "steps": 30
  },
  "Juggernaut 1kx1k": {
    "guidance_scale": 2,
    "model": "Juggernaut XL v9 Lightning",
    "sampler": "DPM++ 2M Karras",
    "size": "1024x1024",
    "steps": 6
  },
  "Juggernaut lightning 4 step / 7sec": {
    "guidance_scale": 1.7,
    "hires_fix": false,
    "model": "Juggernaut XL v9 Lightning",
    "original_height": 768,
    "original_width": 768,
    "sampler": "TCD",
    "size": "768x768",
    "steps": 4,
    "target_height": 768,
    "target_width": 768
  },
  "Juggernaut Hyper 7 step": {
    "guidance_scale": 1.4,
    "loras": [
      {
        "file": "hyper_sdxl_2step_lora_f16.ckpt",
        "weight": 0.6
      }
    ],
    "model": "Juggernaut XL v9",
    "sampler": "DPM++ SDE Substep",
    "size": "768x768",
    "steps": 7
  },
  "Juggernaut Lightning 8 Step": {
    "guidance_scale": 1.7,
    "model": "Juggernaut XL v9 Lightning",
    "sampler": "TCD",
    "size": "768x768",
    "steps": 8
  },
  "Juggernaut Fast": {
    "guidance_scale": 1.4,
    "model": "Juggernaut XL v9 Lightning",
    "sampler": "TCD",
    "size": "768x768",
    "steps": 9
  },
  "PicX Real": {
    "guidance_scale": 5,
    "model": "picxReal_10",
    "sampler": "DPM++ 2M Karras",
    "steps": 24
  },
  "RealVis": {
    "guidance_scale": 7,
    "model": "realvisxlV40_v40LightningBakedvae",
    "sampler": "DPM++ 2M Karras",
    "steps": 25
  },
  "Sd Turbo": {
    "guidance_scale": 0.9,
    "height": 512,
    "hires_fix": false,
    "model": "sd_turbo_f16.ckpt",
    "sampler": "DPM++ 2M Karras",
    "seed_mode": "Scale Alike",
    "steps": 2,
    "width": 512
  }
}
