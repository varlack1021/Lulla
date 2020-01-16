package com.lulla.CustomNativeCode.CNCGradientView;

import android.content.Context;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.ScaleDrawable;
import android.util.AttributeSet;
import android.view.Gravity;
import android.view.View;

import androidx.annotation.Nullable;

public class CNCGradientView extends View {
    float progress;
    float cornerRadius;
    int fromColor;
    int toColor;

    public CNCGradientView(Context context) {
        super(context);
    }

    public CNCGradientView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    public CNCGradientView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    public CNCGradientView(Context context, @Nullable AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
    }

    void update() {
        GradientDrawable gradient = new GradientDrawable();

        gradient.setColors(new int[] {
                this.fromColor,
                this.toColor
        });
        gradient.setOrientation(GradientDrawable.Orientation.LEFT_RIGHT);
        gradient.setGradientType(GradientDrawable.LINEAR_GRADIENT);
        gradient.setShape(GradientDrawable.RECTANGLE);
        gradient.setCornerRadius(this.cornerRadius * 4);

        ScaleDrawable scale = new ScaleDrawable(gradient, Gravity.LEFT, 1, -1);
        scale.setLevel((int)(this.progress * 10000));

        this.setBackground(scale);
    }

    public void setProgress(float progress) {
        this.progress = progress;
        this.update();
    }

    public void setCornerRadius(float cornerRadius) {
        this.cornerRadius = cornerRadius;
        this.update();
    }

    public void setFromColor(int fromColor) {
        this.fromColor = fromColor;
        this.update();
    }

    public void setToColor(int toColor) {
        this.toColor = toColor;
        this.update();
    }
}
