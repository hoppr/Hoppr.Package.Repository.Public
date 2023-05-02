package com.hoppr.mediacodec

import com.google.android.exoplayer2.mediacodec.MediaCodecInfo
import com.google.android.exoplayer2.mediacodec.MediaCodecSelector

class CustomMediaCodecSelector(private val useSoftwareDecoder: Boolean) : MediaCodecSelector {
  override fun getDecoderInfos(
    mimeType: String,
    requiresSecureDecoder: Boolean,
    requiresTunnelingDecoder: Boolean
  ): MutableList<MediaCodecInfo> {
    val decoderInfos =
      MediaCodecSelector.DEFAULT.getDecoderInfos(mimeType, requiresSecureDecoder, requiresTunnelingDecoder)

    val softwareCodecs = arrayListOf<MediaCodecInfo>()
    val hardwareCodecs = arrayListOf<MediaCodecInfo>()

    decoderInfos.forEach {
      if(it.hardwareAccelerated)
        hardwareCodecs.add(it)
      else
        softwareCodecs.add(it)
    }

    return if(useSoftwareDecoder)
      softwareCodecs
    else
      hardwareCodecs
  }
}
