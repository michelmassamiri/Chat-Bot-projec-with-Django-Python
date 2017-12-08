from django.views.generic.base import TemplateView


class ChatterBotAppView(TemplateView):
    template_name = "app.html"

class ee_1_2(TemplateView):
	template_name = "ee_2_3.html"

class ee_3(TemplateView):
	template_name = "ee_4.html"

class ee_4(TemplateView):
	template_name = "ee_5.html"	
