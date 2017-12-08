from django.views.generic.base import TemplateView


class ChatterBotAppView(TemplateView):
    template_name = "app.html"

class ee_1_2(TemplateView):
	template_name = "ee_1_2.html"