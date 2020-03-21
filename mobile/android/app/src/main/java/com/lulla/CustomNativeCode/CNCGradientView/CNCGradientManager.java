package com.lulla.CustomNativeCode.CNCGradientView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class CNCGradientManager extends SimpleViewManager<CNCGradientView> {
    @NonNull
    @Override
    public String getName() {
        return "CNCGradientView";
    }

    @NonNull
    @Override
    protected CNCGradientView createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new CNCGradientView(reactContext);
    }

    @ReactProp(name = "progress")
    public void setProgress(CNCGradientView view, @Nullable float progress) {
        view.setProgress(progress);
    }
    @ReactProp(name = "cornerRadius")
    public void setCornerRadius(CNCGradientView view, @Nullable float cornerRadius) {
        view.setCornerRadius(cornerRadius);
    }
    @ReactProp(name = "fromColor", customType = "Color")
    public void setFromColor(CNCGradientView view, @Nullable int color) {
        view.setFromColor(color);
    }
    @ReactProp(name = "toColor", customType = "Color")
    public void setToColor(CNCGradientView view, @Nullable int color) {
        view.setToColor(color);
    }
}
